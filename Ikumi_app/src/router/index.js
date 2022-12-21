import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodMenuView from "../views/FoodMenuView.vue";
import DrinkMenuView from "../views/DrinkMenuView.vue";
import GalleryView from "../views/GalleryView.vue";
import ReservationView from "../views/ReservationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "food-menu",
      component: FoodMenuView,
    },
    {
      path: "/drinkmenu",
      name: "drink-menu",
      component: DrinkMenuView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/reservations",
      name: "reservations",
      component: ReservationView,
    },
  ],
});

export default router;
