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
          <div
            class="item"
            v-if="
              item.positionX === currentRow && item.positionY === currentColumn
            "
            @dragstart="onDragStart($event, item)"
            draggable="true">
            <div class="item__block" :class="getClass(item.type)"></div>
            <div class="item__count">{{ item.count }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
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

    function onDragStart(e, item) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemId", item.id.toString());
    }
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
      onDragStart,
      onDrop,
    };
  },

  methods: {
    getClass(type) {
      return {
        "type-1": type === 1,
        "type-2": type === 2,
        "type-3": type === 3,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  border: 1px solid $primary-border;
  border-radius: 12px;

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

.item {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover {
    cursor: url("../assets/images/cursor-hover.png") 4 1, pointer;
    background-color: $hover-bg;
  }

  &__block {
    width: 48px;
    height: 48px;

    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;

      z-index: 10;
      top: -6px;
      right: -6px;
      backdrop-filter: blur(6px);
    }
  }

  .type-1 {
    background: #7faa65;
    &::after {
      background: rgba(184, 217, 152, 0.35);
    }
  }

  .type-2 {
    background: #aa9765;

    &::after {
      background: rgba(217, 187, 152, 0.35);
    }
  }

  .type-3 {
    background: #656caa;

    &::after {
      background: rgba(116, 129, 237, 0.35);
    }
  }

  &__count {
    position: absolute;
    bottom: -1px;
    right: -1px;
    padding: 2px 4px;

    background-color: $secondary-bg;

    border: 1px solid $primary-border;
    border-radius: 6px 0px 0px 0px;

    opacity: 0.4;
  }
}
</style>
