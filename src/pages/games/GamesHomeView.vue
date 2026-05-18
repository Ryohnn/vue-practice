<script setup lang="ts">
import { onMounted } from "vue";

async function getData() {
  const response = await fetch(import.meta.env.VITE_APP_URL);

  if (!response.ok) {
    console.log("womp womp");
  }

  const result = await response.json();
  console.log(result);
}

onMounted(() => {
  getData();
});
</script>

<template>
  <div>test</div>
</template>
