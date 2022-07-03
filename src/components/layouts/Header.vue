<template>
  <header class="header">
    <span @click="backRouter" class="header__title">
      <slot name="titleIcon"></slot> {{ title }}
    </span>

    <slot name="btn"></slot>
  </header>

  <!-- header navbar -->
  <!-- <ul class="nav-list">
      <li v-for="(item, index) in navbar" :key="index">
        <router-link class="nav-list__item" :to="item.link">
          {{ item.name }}
        </router-link>
      </li>
    </ul> -->
</template>

<script>
import IconBase from "../common/IconBase.vue";
export default {
  components: { IconBase },
  props: {
    title: String,
  },
  data() {
    return {
      navbar: [
        {
          link: "#",
          name: "Tests",
        },
        {
          link: "#",
          name: "Applicants",
        },
      ],
    };
  },

  methods: {
    backRouter() {
      if (this.route.name === "create-new-test") {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #edf2f7;
  padding: 30px;

  &__title {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-weight: 600;
    font-size: 28px;
    line-height: 136.02%;
    color: #27272e;
  }
}
</style>