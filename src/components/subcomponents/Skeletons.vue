<template>
  <div class="skeletons">
    <div class="stub stub__main"></div>

    <div class="stub__info">
      <div class="stub stub__info-1"></div>
      <div class="stub stub__info-2"></div>
      <div class="stub stub__info-3"></div>
      <div class="stub stub__info-4"></div>
      <div class="stub stub__info-5"></div>
    </div>

    <div class="stub stub__button"></div>
  </div>
</template>

<style lang="scss" scoped>
.skeletons {
  display: flex;
  flex-direction: column;
  gap: 24px;

  align-items: center;
}
.stub {
  background: $linear-gradient;
  border-radius: 4px;
  height: 10px;

  &__main {
    width: 190px;
    height: 26px;

    border-radius: 8px;
  }

  &__button {
    width: 80px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;

    align-items: center;

    &-1 {
      width: 155px;
    }

    &-2 {
      width: 190px;
    }

    &-3 {
      width: 170px;
    }

    &-4 {
      width: 160px;
    }

    &-5 {
      width: 140px;
    }
  }
}
</style>
