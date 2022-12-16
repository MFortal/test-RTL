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

export default {
  components: {
    Item,
  },
  setup() {
    const items = ref([
      {
        id: 1,
        positionX: 1,
        positionY: 1,
        count: 4,
        type: 1,
      },
      {
        id: 2,
        positionX: 1,
        positionY: 2,
        count: 2,
        type: 2,
      },
      {
        id: 3,
        positionX: 1,
        positionY: 3,
        count: 5,
        type: 3,
      },
    ]);

    function onDrop(e, currentRow, currentColumn) {
      const itemId = parseInt(e.dataTransfer.getData("itemId"));
      items.value = items.value.map((item) => {
        if (item.id == itemId) {
          item.positionX = currentRow;
          item.positionY = currentColumn;
        }
        return item;
      });
    }
    return {
      row: 5,
      column: 5,
      items,
      onDrop,
    };
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
