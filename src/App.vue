<script setup lang="ts">
import MainHeader from '@/components/header/MainHeader.vue';
</script>

<template>
  <MainHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
    main {
        padding: 2rem;
    }
</style>
