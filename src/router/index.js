import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/layouts/login.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/layouts/error.vue"),
      meta: { title: "Not found page" },
    },
  ],
});

export default router;
