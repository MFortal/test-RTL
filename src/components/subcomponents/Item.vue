<template>
  <div
    class="item"
    draggable="true"
    @dragstart="onDragStart($event, item)"
    @click="showModalDelete">
    <div class="item__block" :class="getClass(item.type)"></div>
    <div class="item__count" @click.stop="showModalCount">
      {{ item.count }}
    </div>
  </div>
  <modal-edit v-model:show="modalVisibleCount" :item="item" />
  <modal-delete v-model:show="modalVisibleDelete" :item="item" />
</template>

<script>
import ModalDelete from "@/components/subcomponents/ModalDelete.vue";
import ModalEdit from "@/components/subcomponents/ModalEdit.vue";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    currentColumn: {
      required: true,
    },
    currentRow: {
      required: true,
    },
  },
  components: {
    ModalDelete,
    ModalEdit,
  },
  data() {
    return { modalVisibleDelete: false, modalVisibleCount: false };
  },

  methods: {
    onDragStart(e, item) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemId", item.id.toString());
    },
    getClass(type) {
      return {
        "type-1": type === 1,
        "type-2": type === 2,
        "type-3": type === 3,
      };
    },
    showModalDelete() {
      this.modalVisibleDelete = true;
    },
    showModalCount() {
      this.modalVisibleCount = true;
    },
  },
};
</script>

<style lang="scss">
.item {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover {
    cursor: url("../../assets/images/cursor-hover.png") 4 1, pointer;
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

      z-index: 2;
      top: -6px;
      right: -6px;
      backdrop-filter: blur(6px);
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
