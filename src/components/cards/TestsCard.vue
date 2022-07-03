<template>
  <div class="test-card">
    <div class="flex justify-between mb-[18px]">
      <figure class="test-card__figure">
        <img :src="img" alt="" />
      </figure>
      <button>
        <icon-base name="more_btn" class="p-[4px]" />
      </button>
    </div>
    <router-link :to="link" class="test-card__title">{{ title }}</router-link>
    <p class="test-card__subtitle">{{ subtitle }}</p>

    <!-- events -->
    <div class="test-card-events">
      <span
        class="test-card-events__item"
        v-for="(item, index) in events"
        :key="index"
      >
        <icon-base :name="item.icon" />
        {{ item.event }}
      </span>
    </div>
  </div>
</template>

<script>
import IconBase from "../common/IconBase.vue";
export default {
  components: { IconBase },
  props: {
    img: String,
    link: String,
    title: String,
    subtitle: String,
    events: Array,
  },
};
</script>

<style lang="scss" scoped>
.test-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #edf2f7;

  // test-card__figure
  &__figure {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    overflow: hidden;
    background: #ddd;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // test-card__title
  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    color: #27272e;
  }

  // test-card__subtitle
  &__subtitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 162%;
    color: #4c6fff;
  }

  // test-card-events
  &-events {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 25px;
    &__item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #7a7a9d;
    }
  }
}
</style>