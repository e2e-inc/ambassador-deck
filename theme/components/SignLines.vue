<script setup lang="ts">
import { computed } from "vue";
import lines320 from "../assets/e2e-sign-lines-320.svg";
import lines400 from "../assets/e2e-sign-lines-400.svg";

const props = withDefaults(defineProps<{ height?: 400 | 320 }>(), { height: 400 });
/** Static imports so Vite resolves the files from inside the theme package. */
const src = computed(() => (props.height === 320 ? lines320 : lines400));
</script>

<!--
  The sign drawn as lines (slide 44): Signal on Terminal, one even pitch of
  1 px lines in whole pixels, drawn from the sign's own bars. A key visual,
  never the logo: 320 px high at least, 80 px or more from any text.
  Regenerate the SVGs from e2e-sign-white.svg if the sign changes.
-->
<template>
  <img :src="src" alt="" aria-hidden="true" class="pointer-events-none block" />
</template>
