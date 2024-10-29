<template>
	<header>
		<LeftSidebar />
		<button class="bg-blue-500 text-white">
			<span v-show="!darkmode" @click.prevent="darkmode = true">Light</span>
			<span v-show="darkmode" @click.prevent="darkmode = false">Dark</span>
		</button>
	</header>
</template>

<script setup>
	const darkmode = useState("darkmode", (n) => !n.value);
</script>

<style></style>
