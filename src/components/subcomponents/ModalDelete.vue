<template>
  <modal :item="item">
    <button class="modal__btn btn__delete">Удалить</button>
  </modal>
</template>

<script>
import Modal from "@/components/subcomponents/Modal.vue";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    Modal,
  },
};
</script>

<style lang="scss">
.modal__btn {
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

.btn__delete {
  width: 90%;
}
</style>
