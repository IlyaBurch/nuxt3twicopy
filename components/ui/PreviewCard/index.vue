<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
})
</script>

<template>
  <div
    class="m-2 border rounded-2xl bg-gray-50 dark:bg-black twi-border-color p-4"
  >
    <h3
      class="p-3 text-xl font-extrabold text text-gray-900 dark:text-white border-b"
    >
      {{ $t(props.title) }}
    </h3>
    <slot />
    <NuxtLink to="error">
      <div
        class="p-3 text-sm text-blue-400 hover:bg-gray-100 dark:hover:bg-dim-300 dflt-transition dark:text-white"
      >
        {{ $t("Show more") }}
      </div>
    </NuxtLink>
  </div>
</template>

<style></style>
