<script setup lang="ts">
import { useNav } from "@slidev/client";
import { computed } from "vue";

const { currentPage, total, slides } = useNav();
/** Formats a slide number as two digits, like the site's [01] counters. */
const pad = (n: number) => String(n).padStart(2, "0");
/** The appendix starts at the section divider labelled "appendix", if the deck has one. */
const appendixAt = computed(
  () =>
    slides.value.find(
      (s) =>
        s.meta.slide.frontmatter.layout === "section" &&
        s.meta.slide.frontmatter.label === "appendix",
    )?.no,
);
/** Main pages count up to the divider; appendix pages restart at 01. */
const counter = computed(() => {
  const start = appendixAt.value;
  if (!start) return `[ ${pad(currentPage.value)} / ${pad(total.value)} ]`;
  if (currentPage.value < start) return `[ ${pad(currentPage.value)} / ${pad(start - 1)} ]`;
  return `[ appendix · ${pad(currentPage.value - start)} / ${pad(total.value - start)} ]`;
});
</script>

<template>
  <div
    class="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-[80px] items-center justify-between border-b border-e2e-neutral-800 px-[40px]"
  >
    <BrandMark />
    <span class="e2e-caption">{{ counter }}</span>
  </div>
</template>
