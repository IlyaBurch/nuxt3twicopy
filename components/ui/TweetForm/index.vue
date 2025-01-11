<script lang="ts" setup>
import FeedEmoji from '~/assets/icons/FeedEmoji.vue'
import FeedGif from '~/assets/icons/FeedGif.vue'
import FeedImage from '~/assets/icons/FeedImage.vue'
import FeedPoll from '~/assets/icons/FeedPoll.vue'
import FeedSchedule from '~/assets/icons/FeedSchedule.vue'
</script>

<template>
  <div class="flex p-4">
    <UiAvatar alt="user" />
    <form class="pl-4">
      <div class="flex">
        <textarea
          class="w-full dark:bg-black placeholder:text-l"
          :placeholder="$t('What\'s happening?')"
        />
      </div>
      <div class="flex gap-2">
        <button>
          <FeedImage />
        </button>
        <button>
          <FeedGif />
        </button>
        <!-- <button>
          <FeedPoll />
        </button> -->
        <button>
          <FeedEmoji />
        </button>
        <!-- <button>
          <FeedSchedule />
        </button> -->
      </div>
    </form>
  </div>
</template>

<style></style>
