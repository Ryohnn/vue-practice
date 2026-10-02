<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/sources/BaseButton.vue";

const counter = ref(0);
</script>

<template>
  <h1>Counter: {{ counter }}</h1>
  <div>
    <BaseButton @click="counter--" type="primary">-1</BaseButton>
    <BaseButton @click="counter = 0" type="secondary">Reset</BaseButton>
    <BaseButton @click="counter++" type="primary">+1</BaseButton>
  </div>
</template>

<style></style>
