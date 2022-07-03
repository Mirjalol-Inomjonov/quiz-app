<template>
  <section class="result">
    <h1 class="result__title">Muvaffaqiyatli yakunlandi</h1>
    <div class="result-wrapper">
      <div class="result-wrapper__status">
        <span>To‘g‘ri javoblar soni</span>
        {{ successAnswer }} ta
      </div>
      <div class="result-wrapper__status">
        <span>Noto‘g‘ri javoblar soni</span>
        {{ failerAnswer }} ta
      </div>
    </div>

    <router-link to="/" class="btn btn_blue">Asosiyga qaytish</router-link>
  </section>
</template>

<script>
export default {
  props: {
    successAnswer: Number,
    failerAnswer: Number,
  },
};
</script>

<style lang="scss" scoped>
.result {
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
    0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 16px;
  text-align: center;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // result__title
  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #27272e;
  }

  // result-wrapper
  &-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 32px;
    margin: 20px 0 56px 0;
    text-align: left;

    // result-wrapper__status
    &__status {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      color: #27272e;
      display: flex;
      flex-direction: column;
      span {
        font-weight: 500;
        font-size: 15px;
        line-height: 15px;
        color: #7a828a;
        display: inline-block;
        margin-bottom: 6px;
      }
    }
  }
}
</style>