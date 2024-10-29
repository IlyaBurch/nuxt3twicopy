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
			<MainFeed :title="$t('Home')" />
			<!-- Right sidebar со sticky эффектом -->
			<div class="hidden lg:block">
				<div class="sticky top-0 lg:w-72 xl:w-80">
					<RightSidebar />
				</div>
			</div>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
