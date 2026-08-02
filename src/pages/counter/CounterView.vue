<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0);
</script>

<template>
  <h1>Counter: {{ counter }}</h1>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="counter--">-1</button>
  <button @click="counter = 0">Reset</button>
  <button @click="counter++">+1</button>
</template>
