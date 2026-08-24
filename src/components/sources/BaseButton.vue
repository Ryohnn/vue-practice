<script setup lang="ts">
  import { bgColours } from "@/types/Colours.ts";

  const props = defineProps({
    colour: {
      type: String,
      default: 'primary',
    }
  });

  const bgColour = bgColours['primary'];
  console.log(props.colour);
  console.log(bgColour);
</script>

<template>
  <button
    class="hover:bg-blue-700 text-white font-bold px-2 rounded"
    :class="bgColour"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">

</style>
