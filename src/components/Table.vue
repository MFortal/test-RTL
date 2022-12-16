<template>
  <div class="table">
    <div v-for="currentRow in row" class="table__row" :data-row="currentRow">
      <div
        class="table__cell"
        :data-column="currentColumn"
        v-for="currentColumn in column"
        @drop="onDrop($event, currentRow, currentColumn)"
        @dragover.prevent
        @dragenter.prevent>
        <template v-for="item in items">
          <item
            v-if="
              item.positionX === currentRow && item.positionY === currentColumn
            "
            :item="item"
            :currentRow="currentRow"
            :currentColumn="currentColumn"
            :key="item.id" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Item from "@/components/subcomponents/Item.vue";
import { itemsCollection, updatePositions } from "@/firebase.js";

import { onSnapshot, query } from "firebase/firestore";

let items = ref([]);

export default {
  setup() {
    const onDrop = async (e, currentRow, currentColumn) => {
      const itemId = parseInt(e.dataTransfer.getData("itemId"));

      const item = items.value.find((x) => x.id == itemId);
      await updatePositions(item, currentRow, currentColumn);
    };
    return {
      row: 5,
      column: 5,
      items,
      onDrop,
    };
  },
  mounted() {
    let itemsDB = [];
    onSnapshot(itemsCollection, (querySnapshot) => {
      itemsDB = [];
      querySnapshot.forEach((doc) => {
        const item = {
          id: doc.id,
          type: doc.data().type,
          count: doc.data().count,
          positionX: doc.data().positionX,
          positionY: doc.data().positionY,
        };
        itemsDB.push(item);
      });
      items.value = itemsDB;
    });
  },
  components: {
    Item,
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  border: 1px solid $primary-border;
  border-radius: 12px;

  position: relative;
  z-index: 10;
  overflow: hidden;

  &__row {
    display: flex;

    &:not(:last-child) {
      border-bottom: 1px solid $primary-border;
    }
  }

  &__cell {
    width: 105px;
    height: 100px;

    &:not(:last-child) {
      border-right: 1px solid $primary-border;
    }
  }
}
</style>
