<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/sources/BaseButton.vue";

const counter = ref(0);

const btnClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded";

</script>

<template>
  <h1>Counter: {{ counter }}</h1>
  <BaseButton @click="counter--" colour="primary" :class="btnClass">-1</BaseButton>
  <button class="btn" @click="counter = 0">Reset</button>
  <button @click="counter++">+1</button>
</template>

<style>
@reference "tailwindcss"

  .btn {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded;
}
</style>
