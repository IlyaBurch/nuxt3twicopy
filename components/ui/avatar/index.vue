<template>
	<NuxtImg
		:src="props.src"
		class="w-10 h-10 rounded-full"
		:alt="`${props.alt}'s avatar'`" />
</template>

<script lang="ts" setup>
	const props = defineProps({
		src: {
			type: String,
			default: "assets/images/avatar.png",
		},
		alt: {
			type: String,
			requered: true,
		},
	});
</script>

<style></style>
