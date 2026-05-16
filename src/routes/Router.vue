<script lang="ts">
import GamesHomeView from "@/pages/games/GamesHomeView.vue";
import HomeView from "@/pages/HomeView.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/games/",
    component: GamesHomeView,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
</script>
