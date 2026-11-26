<!-- A tick ruler, as e2e.com draws above its rollout phases: one continuous run of 1 px marks. -->
<template>
  <div aria-hidden="true" class="ruler h-[12px] w-full" />
</template>

<style scoped>
.ruler {
  background-image: repeating-linear-gradient(
    to right,
    var(--e2e-neutral-600) 0 1px,
    transparent 1px 4px
  );
}
</style>
