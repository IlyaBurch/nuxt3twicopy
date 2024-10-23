<template>
	<div :class="{ dark: darkmode }">
		<div id="modals" class="relative z-20"></div>
		<div class="flex justify-center dark:bg-black">
			<div class="flex px-auto">
				<Header />
				<NuxtPage />
			</div>
		</div>
	</div>
</template>

<script setup>
	import "@/assets/icons/styles/index.css";
	const darkmode = useState("darkmode", () => false);
</script>
