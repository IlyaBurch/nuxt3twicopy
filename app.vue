<template>
	<div :class="{ dark: darkmode }">
		<div class="flex dark:bg-black">
			<Header />
			<NuxtPage />
		</div>
	</div>
</template>

<script setup>
	import "@/assets/icons/styles/index.css";
	const darkmode = useState("darkmode", () => false);
</script>
