<template>
  <main class="home">
      <Header />
      <div class="home-cards">
        <TestsCard
          v-for="(item, index) in 5"
          :key="index"
          v-bind="{
            img: 'https://picsum.photos/500/500',
            title: 'Headline label',
            subtitle: 'Text label',
            link: '#',
            events: [
              {
                icon: 'calendar',
                event: 'Thu. 24',
              },
              {
                icon: 'camera',
                event: '11:00 - 12:00',
              },
            ],
          }"
        />
      </div>
  </main>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import TestsCard from "@/components/cards/TestsCard.vue";
export default {
  components: { Header, TestsCard },
};
</script>

<style lang="scss" scoped>
.home {
  // home-cards
  &-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
    padding: 30px;
  }
}
</style>