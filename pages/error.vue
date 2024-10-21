<template>
	<div
		class="h-screen text-black dark:text-white w-screen flex flex-col justify-center items-center">
		<p class="text-3xl">{{ $t("Oops") }}</p>
		<p class="text-2xl">
			{{ $t("Sorry, this page is not implemented yet") }}
		</p>
		<button
			class="bg-blue-500 rounded-full text-xl p-4 mt-20 dark:bg-white text-white dark:text-black"
			@click="$router.go(-1)">
			<span>{{ $t("Go back") }}</span>
		</button>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
