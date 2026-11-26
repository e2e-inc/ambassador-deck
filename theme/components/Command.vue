<!--
  The command, e2e's call to action (brand hub, command): a `$` prompt and the line exactly
  as typed, Mono/M on a Terminal box with a 1 px neutral/700 line. Never set it in the sans.
-->
<template>
  <div
    class="inline-flex w-fit items-center gap-[8px] border border-e2e-neutral-700 bg-e2e-terminal px-[20px] py-[20px] type-mono-m"
  >
    <span aria-hidden="true" class="text-e2e-neutral-500">$</span>
    <span class="text-e2e-blank"><slot /></span>
  </div>
</template>
