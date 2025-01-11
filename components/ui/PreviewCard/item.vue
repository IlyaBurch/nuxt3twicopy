<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
  },
  type: {
    type: String,
  },
  username: {
    type: String,
  },
  avatar: {
    type: String,
  },
})
// const showModal = ref(false)
</script>

<template>
  <NuxtLink v-if="props.type === 'trends'" :to="props.link">
    <div
      class="m-2 border rounded-2xl bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-dim-300 twi-border-color p-4"
    >
      <h2 class="font-bold text-gray-800 text-md dark:text-white">
        {{ props.name }}
      </h2>
      <p class="text-xs text-gray-400">
        {{ props.count }} {{ $t("posts") }}
      </p>
    </div>
  </NuxtLink>
  <div
    v-else-if="props.type === 'users'"
    class="flex flex-row justify-between p-2"
  >
    <div class="flex flex-row">
      <NuxtLink :to="props.link">
        <NuxtImg
          :src="props.avatar"
          class="w-10 h-10 rounded-full"
          :alt="`${props.name}'s avatar'`"
        />
      </NuxtLink>

      <div class="flex flex-col ml-2">
        <NuxtLink :to="props.link">
          <h4 class="text-sm font-bold text-gray-900 dark:text-white">
            {{ props.name }}
          </h4>
        </NuxtLink>
        <NuxtLink :to="props.link">
          <p class="text-xs text-gray-400 dark:text-gray-350">
            {{ props.username }} {{ $t("posts") }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <!-- <button
      class="flex items-center h-full rounded-full bg-black text-white dark:bg-white dark:text-black"
      @click="showModal = true"
    >
      <span class="p-2 py-2 text-sm">{{ $t("Follow") }}</span>
    </button> -->
    <UiButton :text="$t('Follow')" bg="bg-black dark:bg-white" />
  </div>
</template>

<style></style>
