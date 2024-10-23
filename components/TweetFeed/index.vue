<template>
	<h2>{{ $t(props.title) }}</h2>
	<!-- <UiTweet title="Home" :items="[]" />
	<Button label="shieeet" /> -->
</template>

<script lang="ts" setup>
	import Button from "primevue/button";

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
	const showModal = ref(false);
</script>

<style></style>
