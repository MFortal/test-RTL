<template>
  <footer class="footer">
    <div class="footer__skeleton"></div>
    <close />
  </footer>
</template>

<script>
import Close from "@/components/subcomponents/Close.vue";

export default {
  components: {
    Close,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 785px;
  height: 72px;
  padding: 18px 68px 18px 18px;

  background: $secondary-bg;
  border: 1px solid $primary-border;
  border-radius: 12px;

  position: relative;

  &__skeleton {
    width: 699px;
    height: 36px;

    background: $linear-gradient;
    border-radius: 12px;
  }
}
</style>
