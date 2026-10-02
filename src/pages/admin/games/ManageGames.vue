<script setup lang="ts">
import { onMounted } from "vue";
import { useFetch } from "@/composables/useFetch";

const { data, error, fetch } = useFetch();

onMounted(() => {
  fetch.url("/games").get().run();
});
</script>

<template>
  <div>
    <div v-if="data">
      <li v-for="game in data" :key="game.id">
        {{ game.title }}
      </li>
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>
