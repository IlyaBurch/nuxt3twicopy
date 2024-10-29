<template>
	<div class="flex flex-col dark:text-white border twi-border-color">
		<div class="p-4 border-b twi-border-color">
			<h2 class="text-xl font-bolt text-gray-800 dark:text-gray-100">
				{{ $t(props.title) }}
			</h2>
		</div>
		<UiTweetForm class="border-l-0 border-r-0 border-b-1 twi-border-color" />
		<UiTweet class="border border-l-0 border-r-0 twi-border-color" />
	</div>
</template>

<script setup>
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
