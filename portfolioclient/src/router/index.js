import { createWebHistory, createRouter } from "vue-router";
import Mainpage from "../views/MainPage.vue";
import AboutPage from "../views/AboutPage.vue";

const routes = [
  {
    path: "/",
    name: "Mainpage",
    component: Mainpage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;