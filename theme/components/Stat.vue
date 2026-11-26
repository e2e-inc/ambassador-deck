<script setup lang="ts">
defineProps<{ value: string; label: string }>();
</script>

<template>
  <div class="border-t border-e2e-neutral-700 pt-[20px]">
    <div class="type-number-l text-e2e-blank">{{ value }}</div>
    <div class="e2e-caption mt-[8px]">{{ label }}</div>
  </div>
</template>
