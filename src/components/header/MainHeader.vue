<script setup lang="ts">
import NavigationBar from "@/components/navigation/NavigationBar.vue";
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
header {
  padding: 0.75rem;
  height: 55px;
  position: sticky;
  top: 0;
}
</style>
