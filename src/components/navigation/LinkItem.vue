<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <a :href>
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
a {
  display: inline-block;
  position: relative;
  height: 100%;
  text-decoration: none;
  color: white;
  transition: 0.4s;
}
</style>
