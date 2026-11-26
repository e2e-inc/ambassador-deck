<script setup lang="ts">
defineProps<{ label?: string }>();
</script>

<template>
  <div class="slidev-layout statement flex items-center">
    <SlideChrome />
    <SignLines :height="400" class="absolute right-[80px] top-[200px]" />
    <div class="relative z-10 flex w-full max-w-[780px] flex-col">
      <Label v-if="label" class="mb-[40px]">{{ label }}</Label>
      <div class="flex flex-col">
        <slot />
      </div>
    </div>
  </div>
</template>
