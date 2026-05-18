<script setup lang="ts">
import { onMounted } from "vue";
import { useFetch } from "@/composables/useFetch";

const { data, error, fetch } = useFetch();

onMounted(() => {
  fetch.url("/test").get().run();
});
</script>

<template>
  <div>
    <pre v-if="data">{{ data }}</pre>
    <pre v-else-if="error">{{ error }}</pre>
    <p v-else>Loading...</p>
  </div>
</template>
