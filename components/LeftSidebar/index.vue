<template>
	<div class="flex flex-col">
		<div
			class="p-2 my-2 hover:bg-blue-100 rounded-full w-min dark:hover:bg-white/20 dflt-transition">
			<NuxtLink to="/">
				<div class="w-8 h-8">
					<TwitterLogo />
				</div>
			</NuxtLink>
		</div>
		<li class="list-none">
			<nuxt-link to="#">
				<LeftSidebarTab active :name="$t('Home')">
					<HomeIcon />
				</LeftSidebarTab>
			</nuxt-link>

			<nuxt-link to="#">
				<LeftSidebarTab :name="$t('Explore')">
					<HashtagIcon />
				</LeftSidebarTab>
			</nuxt-link>

			<nuxt-link to="#">
				<LeftSidebarTab :name="$t('Notifitications')">
					<BellIcon />
				</LeftSidebarTab>
			</nuxt-link>

			<nuxt-link to="#">
				<LeftSidebarTab :name="$t('Messages')">
					<InboxIcon />
				</LeftSidebarTab>
			</nuxt-link>

			<nuxt-link to="#">
				<LeftSidebarTab :name="$t('Bookmarks')">
					<BookmarkIcon />
				</LeftSidebarTab>
			</nuxt-link>

			<nuxt-link to="#">
				<LeftSidebarTab :name="$t('Lists')">
					<DocumentTextIcon />
				</LeftSidebarTab>
			</nuxt-link>

			<nuxt-link to="#">
				<LeftSidebarTab :name="$t('Profile')">
					<UserIcon />
				</LeftSidebarTab>
			</nuxt-link>

			<nuxt-link to="#">
				<LeftSidebarTab :name="$t('More')">
					<EllipsisHorizontalCircleIcon />
				</LeftSidebarTab>
			</nuxt-link>

			<button class="rounded-full bg-blue-500 p-2">
				<span class="text-white">{{ $t("Tweet") }}</span>
			</button>
		</li>
	</div>
</template>

<script setup>
	import TwitterLogo from "~/assets/icons/TwitterLogo.vue";
	import {
		BellIcon,
		BookmarkIcon,
		DocumentTextIcon,
		EllipsisHorizontalCircleIcon,
		HashtagIcon,
		HomeIcon,
		InboxIcon,
		UserIcon,
	} from "@heroicons/vue/16/solid";
</script>

<style></style>
