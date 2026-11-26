<script setup lang="ts">
defineProps<{ index: string; title: string; compact?: boolean; accent?: boolean }>();
</script>

<!-- `accent` inverts one step onto Blank with Terminal text, to call it out without a Signal fill. -->
<template>
  <div
    class="step"
    :class="
      accent ? 'step-accent bg-e2e-blank p-[20px]' : 'border-t border-e2e-neutral-700 pt-[20px]'
    "
  >
    <div class="step-index type-caption" :class="accent ? '!text-e2e-terminal' : ''">
      [ {{ index }} ]
    </div>
    <h3 class="!mt-[20px]" :class="accent ? '!text-e2e-terminal' : ''">{{ title }}</h3>
    <p
      v-if="$slots.default"
      class="!mt-[8px]"
      :class="[compact ? 'type-body-s' : 'type-body-m', accent ? '!text-e2e-neutral-700' : '']"
    >
      <slot />
    </p>
  </div>
</template>
