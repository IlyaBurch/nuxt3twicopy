<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  avatar: {
    type: String,
  },
  text: {
    type: String,
  },
})
</script>

<template>
  <div class="flex">
    <UiAvatar :src="avatar" alt="user" class="ml-4 mt-4" />
    <div class="p-4 pl-2">
      <div class="flex">
        <h5 class="font-bold">
          {{ props.name }}
        </h5>
        <span class="text-gray-400 pl-2">@{{ props.username }}</span>
      </div>
      <p class="pt-1">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<style></style>
