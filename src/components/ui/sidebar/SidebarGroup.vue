<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-sidebar="group"
    :class="cn('relative flex w-full min-w-0 flex-col px-2 pt-2', props.class)"
  >
    <slot />
  </div>
</template>
