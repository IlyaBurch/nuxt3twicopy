<!-- <template>
	<div class="">
		<div class="flex h-full relative">
			<MainFeed :title="$t('Home')" :tweets="tweets" />
			<div class="sticky top-0">
				<RightSidebar class="hidden lg:block lg:w-72 xl:w-80" />
			</div>
		</div>
	</div>
</template> -->
<template>
	<main>
		<div class="flex">
			<!-- Основная лента -->
			<MainFeed :title="$t('Home')" :tweets="tweets" />
			<!-- Right sidebar со sticky эффектом -->
			<div class="hidden lg:block">
				<div class="sticky top-0 lg:w-72 xl:w-80">
					<RightSidebar />
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
	const tweets = [
		{
			name: "John Doe",
			username: "johndoe",
			text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			name: "Jane Doe",
			username: "janedoe",
			text: "Hello, world!",
		},
		{
			name: "John Doe",
			username: "johndoe",
			text: "Hello, world!",
		},
		{
			name: "Jane Doe",
			username: "janedoe",
			text: "Hello, world!",
		},
		{
			name: "John Doe",
			username: "johndoe",
			text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			name: "Jane Doe",
			username: "janedoe",
			text: "Hello, world!",
		},
		{
			name: "John Doe",
			username: "johndoe",
			text: "Hello, world!",
		},
		{
			name: "Jane Doe",
			username: "janedoe",
			text: "Hello, world!",
		},
		{
			name: "John Doe",
			username: "johndoe",
			text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			name: "Jane Doe",
			username: "janedoe",
			text: "Hello, world!",
		},
		{
			name: "John Doe",
			username: "johndoe",
			text: "Hello, world!",
		},
		{
			name: "Jane Doe",
			username: "janedoe",
			text: "Hello, world!",
		},
	];
</script>

<style></style>
