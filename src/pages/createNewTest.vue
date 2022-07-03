<template>
  <main>
    <Header />
    <div class="content">
      <div class="content-add-test">
        <div>
          <h1 class="content-add-test__title">Test qo‘shish</h1>
          <p class="content-add-test__subtitle">
            Ariza topshiruvchining bilim va ko'nikmalarini tekshirish uchun
            savollar formasini yarating
          </p>
        </div>
        <button class="btn btn_white self-start">
          <IconBase name="plus_blue" />
          Qo‘shish
        </button>
      </div>
      <!-- form card -->
      <CreateTest />
    </div>
  </main>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import IconBase from "@/components/common/IconBase.vue";
import CreateTest from "@/components/cards/CreateTest.vue";
export default {
  components: {
    Header,
    IconBase,
    CreateTest,
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 30px;
  // content-add-test
  &-add-test {
    display: flex;
    justify-content: space-between;
    padding: 20px 24px;
    background: #4c6fff;
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
      0px 3px 8px -1px rgba(50, 50, 71, 0.05);
    border-radius: 16px;
    margin-bottom: 30px;
    &__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 136.02%;
      color: #ffffff;
      margin-bottom: 10px;
    }

    &__subtitle {
      font-weight: 500;
      font-size: 16px;
      line-height: 15px;
      color: #ffffff;
    }
  }
}
</style>