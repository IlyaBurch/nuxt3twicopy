<template>
	<div
		class="flex flex-col min-w-twiS max-w-twi dark:text-white border twi-border-color">
		<div class="flex p-4 border-b twi-border-color">
			<h2 class="text-xl font-bolt text-gray-800 dark:text-gray-100">
				{{ $t(props.title) }}
			</h2>
		</div>
		<!-- TODO: вынести форму в отдельный компонент, чтобы переиспользовать ленту -->
		<UiTweetForm class="border-l-0 border-r-0 border-b-1 twi-border-color" />
		<UiTweet
			v-for="(tweet, i) in props.tweets"
			:key="i"
			:name="tweet.name"
			:username="tweet.username"
			:text="tweet.text"
			class="border border-l-0 border-r-0 twi-border-color" />
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
