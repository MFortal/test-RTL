<template>
  <modal :item="item">
    <form @submit.prevent class="modal__form">
      <input
        class="modal__input"
        type="text"
        v-model="newCount"
        placeholder="Введите количество" />
      <button class="modal__btn btn__cancel" @click="hideModal" type="reset">
        Отмена
      </button>
      <button class="modal__btn btn__confirm" @click="editItem">
        Подтвердить
      </button>
    </form>
  </modal>
</template>

<script>
import Modal from "@/components/subcomponents/Modal.vue";
import { updateCount } from "@/firebase.js";

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
  data() {
    return {
      currentItem: {
        id: "",
        count: "",
      },
      newCount: null,
    };
  },

  methods: {
    hideModal() {
      document.querySelector(".modal").classList.add("modal-hide");
      setTimeout(() => this.$emit("update:show", false), 2000);
      this.newCount = null;
    },
    async editItem() {
      document.querySelector(".modal").classList.add("modal-hide");
      setTimeout(() => this.$emit("update:show", false), 2000);

      await updateCount(this.item, this.newCount);
      this.newCount = null;
    },
  },
};
</script>

<style lang="scss">
.modal {
  &__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
    padding: 20px 21px;

    background: rgba(38, 38, 38, 0.6);

    border-top: 1px solid $primary-border;
    backdrop-filter: blur(8px);

    position: absolute;
    bottom: 0;
  }

  &__input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: $accent-color;

    padding: 11px 0 11px 12px;
    width: 100%;

    opacity: 0.4;

    background: $secondary-bg;
    border: 1px solid $primary-border;
    border-radius: 4px;

    &::placeholder {
      color: $accent-color;
    }
  }
}

.btn {
  &__cancel,
  &__confirm {
    border-radius: 8px;
  }

  &__cancel {
    background: $accent-color;
    padding: 8px 20px;

    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: $primary-black;
  }
  &__confirm {
    padding: 8px 15px;
  }
}
</style>
