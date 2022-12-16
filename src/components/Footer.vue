<template>
  <footer class="footer">
    <div class="footer__skeleton"></div>
    <span class="footer__close">
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z" />
      </svg>
    </span>
  </footer>
</template>

<script></script>

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

  &__close {
    position: absolute;
    top: 6px;
    right: 6px;

    padding: 6px;

    & svg {
      width: 12px;
      height: 12px;

      & path {
        fill: $accent-color;
      }
    }
  }
}
</style>
