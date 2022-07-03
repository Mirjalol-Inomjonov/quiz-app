<script setup>
import { RouterView } from "vue-router";
import Dashboard from "@/components/common/Dashboard.vue"
</script>

<template>
  <main class="main">
    <section class="main-dashboard">
      <Dashboard />
    </section>
    <div class="main-contents">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  // main__dashboard
  &-dashboard {
    grid-column: 1/4;
  }

  // main__contents
  &-contents {
    grid-column: 4/13;
    background: #e5e5e5;
    min-height: 100vh;
  }
}
</style>