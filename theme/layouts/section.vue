<script setup lang="ts">
defineProps<{ label?: string }>();
</script>

<template>
  <div class="slidev-layout section flex flex-col justify-end">
    <Curtain :height="240" />
    <div class="absolute inset-x-0 top-0 z-20 flex h-[80px] items-center justify-between px-[40px]">
      <BrandMark />
    </div>
    <div class="relative z-10 flex flex-col pb-[20px]">
      <Label v-if="label" class="mb-[8px]">{{ label }}</Label>
      <div class="flex flex-col gap-[20px]">
        <slot />
      </div>
    </div>
  </div>
</template>
