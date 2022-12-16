<template>
  <div class="modal" v-if="show">
    <div class="modal__content" @click.stop>
      <close @click="hideModal" />
      <div class="modal__item item__block" :class="getClass(item.type)"></div>
      <div class="modal__info">
        <skeletons />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Skeletons from "@/components/subcomponents/Skeletons.vue";
import Close from "@/components/subcomponents/Close.vue";

export default {
  components: {
    Skeletons,
    Close,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
    },
  },
  methods: {
    getClass(type) {
      return {
        "type-1": type === 1,
        "type-2": type === 2,
        "type-3": type === 3,
      };
    },
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  width: 250px;
  height: 500px;

  background: rgba(38, 38, 38, 0.5);
  border-left: 1px solid $primary-border;
  backdrop-filter: blur(8px);

  top: 0;
  height: 100%;
  right: 0;
  z-index: 8;
  position: absolute;

  &__btn {
    padding: 11px 0;
    background: $primary-red;
    border-radius: 8px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: $accent-color;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 50px 0 18px;
    height: 100%;

    position: relative;
  }

  &__info {
    width: 220px;
    border-top: 1px solid $primary-border;
    border-bottom: 1px solid $primary-border;

    padding: 16px 0 24px;
    margin-bottom: 16px;

    max-height: 200px;
    overflow-y: clip;
  }

  &__close {
    top: 8px;
    right: 8px;
  }

  &__item {
    width: 115px;
    height: 115px;

    margin-bottom: 30px;
  }
}
</style>
