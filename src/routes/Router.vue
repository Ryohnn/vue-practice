<script lang="ts">
import CounterView from "@/pages/counter/CounterView.vue";
import GamesHomeView from "@/pages/games/GamesHomeView.vue";
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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
</script>
