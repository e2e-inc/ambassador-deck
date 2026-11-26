<script setup lang="ts">
defineProps<{ partner?: string; partnerLogo?: string; partnerLogoHeight?: number }>();
</script>

<template>
  <div class="flex items-center gap-5">
    <!-- 96 px is the smallest logotype step (hard rule 2). -->
    <img src="../assets/e2e-logotype-blank.svg" alt="e2e" class="block w-[96px] h-auto" />
    <!-- Partner logos are 24 px high; a stacked or square logo can set partnerLogoHeight in the headmatter. -->
    <template v-if="partner ?? $slidev.configs.partner">
      <span class="type-caption text-e2e-neutral-500">x</span>
      <img
        v-if="partnerLogo ?? $slidev.configs.partnerLogo"
        :src="partnerLogo ?? $slidev.configs.partnerLogo"
        :alt="partner ?? $slidev.configs.partner"
        class="block w-auto"
        :style="{ height: `${partnerLogoHeight ?? $slidev.configs.partnerLogoHeight ?? 24}px` }"
      />
      <span v-else class="type-body-l text-e2e-blank">{{
        partner ?? $slidev.configs.partner
      }}</span>
    </template>
  </div>
</template>
