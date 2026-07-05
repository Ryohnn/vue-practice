<script setup lang="ts">
import NavigationBar from '@/components/navigation/NavigationBar.vue';
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
  header {
      padding: 0.75rem;
      height: 55px;
      position: sticky;
      top: 0;
      a {
          display: inline-block;
          position: relative;
          height: 100%;
          text-decoration: none;
          color: hsla(160, 100%, 37%, 1);
          transition: 0.4s;

          .main_logo {
              display: flex;
              align-items: center;
              height: 100%;
              gap: 0.5rem;
          }
      }

      @media (hover: hover) {
          a:hover {
            opacity: 0.5;
          }
      }
  }
</style>
