<script setup lang="ts">
import { buttonThemes, type ButtonType } from "@/types/Colours";
import { computed } from "vue";

interface BaseButtonProps {
  type?: ButtonType;
}

const { type = "primary" } = defineProps<BaseButtonProps>();

const buttonClassArr = computed(() => [[buttonThemes[type].class, buttonThemes[type].hover]]);

</script>

<template>
  <button :class="buttonClassArr">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">

</style>
