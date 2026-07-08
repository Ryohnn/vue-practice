<script setup lang="ts">
type LinkItemType = "logo" | "button" | "standard";

interface LinkItemProps {
  href: string;
  type?: LinkItemType;
}

const { href, type = "button" } = defineProps<LinkItemProps>();
</script>

<template>
  <a :href="href" class="link" :class="{ button: type === 'button' }">
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  text-decoration: none;
  color: white;
  transition: 0.4s;

  &.button {
    border: 1px solid grey;
    border-radius: 0.35rem;
    padding: 0.5rem;
  }
}

@media (hover: hover) {
  .link:hover {
    opacity: 0.5;

    &.button {
      opacity: 1;
      background: #424242;
    }
  }
}
</style>
