<template>
  <modal :item="item">
    <button class="modal__btn btn__delete" @click="deleteItem(item)">
      Удалить
    </button>
  </modal>
</template>

<script>
import Modal from "@/components/subcomponents/Modal.vue";
import { deleteData } from "@/firebase.js";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    Modal,
    deleteData,
  },

  methods: {
    async deleteItem(item) {
      this.$emit("update:show", false);

      await deleteData(item);
    },
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
