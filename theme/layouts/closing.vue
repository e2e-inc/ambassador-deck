<script setup lang="ts">
defineProps<{ label?: string }>();
</script>

<!--
  Closing: mirrors the cover so the deck opens and ends the same way. Logotype in the
  top rail where every slide has it, the contact below, e2e.com's live hero field
  across the lower half.
-->
<template>
  <div class="slidev-layout closing flex flex-col !pt-[80px]">
    <img
      src="../assets/hero-field-live.png"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-[60px] block h-[720px] w-full"
    />
    <div
      class="absolute inset-x-0 top-0 z-10 flex h-[80px] items-center border-b border-e2e-neutral-800 bg-e2e-terminal px-[40px]"
    >
      <BrandMark />
    </div>
    <div class="relative z-10 mt-[40px] flex flex-col">
      <Label v-if="label" class="mb-[8px]">{{ label }}</Label>
      <div class="flex flex-col gap-[20px]">
        <slot />
      </div>
    </div>
  </div>
</template>
