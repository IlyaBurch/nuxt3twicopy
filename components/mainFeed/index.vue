<template>
	<div class="flex flex-col dark:text-white">
		<div class="p-4 backdrop-blur-md">
			<h2 class="text-xl font-bolt text-gray-800 dark:text-gray-100">
				{{ $t(props.title) }}
			</h2>
		</div>
		<UiTweet />
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		tweets: {
			type: Array,
			required: true,
		},
	});
</script>

<style></style>
