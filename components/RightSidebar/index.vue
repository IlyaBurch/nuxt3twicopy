<template>
	<div class="h-full">
		<UiPreviewCard v-for="(item, i) in list" :key="i" :title="item.name">
			<UiPreviewCardItem
				v-for="(item2, i) in item.items"
				:key="i"
				:type="item.type"
				:link="item2.link"
				:name="item2.name"
				:avatar="item2.avatar"
				:count="item2.count" />
		</UiPreviewCard>
		<p class="text-sm text-gray-400">
			{{ $t("All right doesn't belong to me, studying purpose only") }}
		</p>
	</div>
</template>
<script setup>
	const list = {
		first: {
			name: "What's happening",
			type: "trends",
			items: [
				{
					name: "Nuxt 3",
					link: "/error",
					count: 10,
				},
				{
					name: "Nuxt 3",
					link: "/error",
					count: 10,
				},
			],
		},
		second: {
			name: "Who's to follow",
			type: "users",
			items: [
				{
					name: "Nuxt 3",
					link: "/error",
					username: "@nuxt",
					avatar: "assets/images/avatar.png",
				},
				{
					name: "Nuxt 3",
					link: "/error",
					username: "@nuxt",
					avatar: "assets/images/avatar.png",
				},
			],
		},
	};
</script>

<style></style>
