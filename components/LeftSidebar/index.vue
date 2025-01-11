<script lang="ts" setup>
import {
  BellIcon,
  BookmarkIcon,
  DocumentTextIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  PencilIcon,
  UserIcon,
} from '@heroicons/vue/16/solid'
import TwitterLogo from '~/assets/icons/TwitterLogo.vue'

const lg = useState('lg', () => false)
</script>

<template>
  <div class="flex flex-col align-baseline">
    <div
      class="p-2 my-2 hover:bg-blue-100 rounded-full w-min dark:hover:bg-white/20 dflt-transition"
    >
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
    </li>
    <!-- <UiButton v-if="!lg" class="w-full" :text="$t('Tweet')" padding="py-4" />
    <UiButton v-else class="w-full" padding="py-2">
      <UserIcon />
    </UiButton> -->
    <button class="rounded-full bg-sky-500 py-2 px-2">
      <PencilIcon class="lg:hidden text-white" />
      <span class="hidden lg:block py-2 px-2 text-white dark:text-black">{{ $t('Tweet') }}</span>
    </button>
  </div>
</template>

<style></style>
