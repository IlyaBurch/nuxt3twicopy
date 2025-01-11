<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
  },
  bg: {
    type: String,
    default: 'bg-sky-500 dark:bg-white',
  },
  textLight: {
    type: String,
    default: 'text-white',
  },
  textDark: {
    type: String,
    default: 'text-black',
  },
  padding: {
    type: String,
    default: 'py-1 px-1',
  },
})
</script>

<template>
  <button class="rounded-full" :class="`${props.bg} ${props.padding}`">
    <slot name="icon" />
    <span class="px-2" :class="`${props.textLight} dark:${props.textDark}`">{{ props.text }}</span>
  </button>
</template>

<style>

</style>
