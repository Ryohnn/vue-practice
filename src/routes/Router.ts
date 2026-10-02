import CounterView from "@/pages/counter/CounterView.vue";
import GamesHomeView from "@/pages/games/GamesHomeView.vue";
import ManagesGames from "@/pages/admin/games/ManageGames.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/counter/",
    component: CounterView,
  },
  {
    path: "/games/",
    component: GamesHomeView,
  },
  {
    path: "/admin/games/",
    component: ManagesGames,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
