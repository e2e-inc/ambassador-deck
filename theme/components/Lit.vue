<script setup lang="ts">
import { useSlideContext } from "@slidev/client";
import { computed } from "vue";

const props = defineProps<{ at: number; align?: "left" | "right" }>();
const { $clicks } = useSlideContext();
const lit = computed(() => $clicks.value === props.at);
</script>

<template>
  <p class="lit" :class="{ 'is-lit': lit, 'text-right': align === 'right' }">
    <slot />
  </p>
</template>

<style scoped>
.lit {
  font-family: var(--e2e-font-sans);
  font-size: 45px;
  line-height: 1.2;
  text-transform: lowercase;
  color: var(--e2e-neutral-500);
  transition: color 350ms ease-out;
}

.lit.is-lit {
  color: var(--e2e-blank);
}
</style>
