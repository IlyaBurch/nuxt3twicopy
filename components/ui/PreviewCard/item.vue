<template>
	<NuxtLink v-if="props.type === 'trends'" :to="props.link">
		<div
			class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700 twi-border-color p-4">
			<h2 class="font-bold text-gray-800 text-md dark:text-white">
				{{ props.name }}
			</h2>
			<p class="text-xs text-gray-400">{{ props.count }} {{ $t("posts") }}</p>
		</div>
	</NuxtLink>
	<div
		v-else-if="props.type === 'users'"
		class="flex flex-row justify-between p-2">
		<div class="flex flex-row">
			<NuxtImg
				:src="props.avatar"
				class="w-10 h-10 rounded-full"
				:alt="`${props.name}'s avatar'`" />

			<div class="flex flex-col ml-2">
				<h4 class="text-sm font-bold text-gray-900 dark:text-white">
					{{ props.name }}
				</h4>
				<p class="text-xs text-gray-400 dark:text-gray-350">
					{{ props.username }} {{ $t("posts") }}
				</p>
			</div>
		</div>
		<button
			class="flex items-center h-full rounded-full bg-black text-white dark:bg-white dark:text-black">
			<span class="p-2 py-2 text-sm">{{ $t("Follow") }}</span>
		</button>
	</div>
</template>

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
	});
</script>

<style></style>
