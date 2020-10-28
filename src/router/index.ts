import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Page from "../views/Page.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Page",
    component: Page
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
