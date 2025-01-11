<!-- eslint-disable no-undef -->
<script setup>
import '@/assets/styles/index.css'

const darkmode = useState('darkmode', () => false)
</script>

<template>
  <div :class="{ dark: darkmode }">
    <div class="flex justify-center min-h-screen w-screen dark:bg-black">
      <!-- Левая панель с Header -->
      <aside class="w-fill pr-0 sticky top-0 h-screen">
        <div class="flex flex-col items-start space-y-4 px-4 py-6">
          <Header />
        </div>
      </aside>

      <!-- Центральная часть для NuxtPage -->
      <main class="w-1/2 px-4">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
