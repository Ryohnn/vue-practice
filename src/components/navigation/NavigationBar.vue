<script setup lang="ts">
import LinkItem from "@/components/navigation/LinkItem.vue";
</script>

<template>
  <nav class="navbar top">
    <LinkItem href="/">
      <div class="logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" height="100%" />
        <span>Steamy</span>
      </div>
    </LinkItem>

    <LinkItem href="/games"> </LinkItem>
  </nav>
</template>

<style scoped lang="scss">
nav {
  height: 100%;
}

a {
  display: inline-block;
  position: relative;
  height: 100%;
  text-decoration: none;
  color: white;
  transition: 0.4s;

  .logo {
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
</style>
