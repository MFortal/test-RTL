<template>
  <div @click="addAllItems" class="refresh">
    Удалили все элементы? Восстановить
  </div>
  <section class="main">
    <column />
    <table-elem />
    <footer-elem />
  </section>
</template>

<script>
import Column from "@/components/Column.vue";
import FooterElem from "@/components/Footer.vue";
import TableElem from "@/components/Table.vue";
import Modal from "@/components/subcomponents/Modal.vue";
import { createData } from "@/firebase.js";

export default {
  components: {
    Column,
    FooterElem,
    TableElem,
    Modal,
    createData,
  },

  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },

    async addAllItems() {
      const items = [
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
      ];
      for (let i = 0; i < items.length; i++) {
        await createData(items[i]);
      }
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.refresh {
  text-align: center;
  padding: 12px 40px;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  padding: 32px;
}
</style>
