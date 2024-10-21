<template>
  <div
    class="flex items-center p-3 rounded-full dflt-transition w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white"
  >
    <div class="w-6 h-6 text-dark">
      <slot />
    </div>
    <span class="hidden lg:block text-xl ml-4" :class="{ 'font-bold': active }">
      {{ props.name }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
