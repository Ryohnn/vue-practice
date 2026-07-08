<script setup lang="ts">
import LinkItem from "@/components/navigation/LinkItem.vue";
</script>

<template>
  <nav class="navbar top">
    <LinkItem href="/" type="logo">
      <div class="logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" height="100%" />
        <span>Dupio</span>
      </div>
    </LinkItem>

    <div class="splitter"></div>

    <LinkItem href="/games">
      <p>Games</p>
    </LinkItem>
  </nav>
</template>

<style scoped lang="scss">
nav {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:first-child {
    gap: 1rem;
  }

  .splitter {
    content: "";
    height: 125%;
    width: 1px;
    background-color: #555555;
  }
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.5rem;
}
</style>
