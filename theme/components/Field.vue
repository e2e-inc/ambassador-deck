<script setup lang="ts">
withDefaults(defineProps<{ height?: number }>(), { height: 220 });
</script>

<!-- The raster field from e2e.com's hero: horizontal lines only, never faded or blended. -->
<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
    :style="{ height: `${height}px` }"
  >
    <img src="../assets/hero-field-desktop.png" alt="" class="absolute inset-x-0 bottom-0 w-full" />
  </div>
</template>
