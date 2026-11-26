<script setup lang="ts">
withDefaults(defineProps<{ height?: number }>(), { height: 300 });
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-x-0 top-[76px] z-0 overflow-hidden"
    :style="{ height: `${height}px` }"
  >
    <img src="../assets/cta-curtain.png" alt="" class="absolute inset-x-0 top-0 w-full" />
  </div>
</template>
