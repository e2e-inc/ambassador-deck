<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    partner?: string;
    partnerLogo?: string;
    visual?: "field" | "sign" | "hero";
  }>(),
  { visual: "hero" },
);
</script>

<!--
  Cover: logotype in the top rail, then label and H1. `hero` (default) is e2e.com's live
  hero field across the lower half, `field` the older bottom strip, `sign` the sign as
  lines on the right.
-->
<template>
  <div class="slidev-layout cover flex flex-col !pt-[80px]">
    <img
      v-if="visual === 'hero'"
      src="../assets/hero-field-live.png"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-[60px] block h-[720px] w-full"
    />
    <div
      class="absolute inset-x-0 top-0 z-10 flex h-[80px] items-center border-b border-e2e-neutral-800 bg-e2e-terminal px-[40px]"
    >
      <BrandMark :partner="partner" :partner-logo="partnerLogo" />
    </div>
    <div class="relative z-10 mt-[40px] flex flex-col">
      <Label v-if="label" class="mb-[8px]">{{ label }}</Label>
      <div class="flex flex-col gap-[20px]">
        <slot />
      </div>
    </div>
    <SignLines v-if="visual === 'sign'" :height="400" class="absolute right-[80px] top-[200px]" />
    <Field v-if="visual === 'field'" :height="220" />
  </div>
</template>
