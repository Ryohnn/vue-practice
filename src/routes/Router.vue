<script lang="ts">
import GamesHomeView from "@/pages/games/GamesHomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
