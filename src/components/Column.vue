<template>
  <aside class="column">
    <img class="column__img" src="../assets/images/foto.png" alt="" />
    <skeletons />
  </aside>
</template>

<script>
import Skeletons from "@/components/subcomponents/Skeletons.vue";

export default {
  components: {
    Skeletons,
  },
};
</script>

<style lang="scss" scoped>
.column {
  background-color: $secondary-bg;
  padding: 18px 14px 24px;
  border: 1px solid $primary-border;
  border-radius: 12px;

  max-width: 236px;

  &__img {
    background: rgba(255, 255, 255, 0.1);
    filter: blur(6px);
    border-radius: 8px;
    margin-bottom: 20px;

    width: 208px;
    height: 240px;
  }
}
</style>
