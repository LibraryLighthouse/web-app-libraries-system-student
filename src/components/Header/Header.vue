<template>
  <header class="w-full bg-white text-black dark:bg-black dark:text-white shadow">
    <section class="flex justify-between items-center w-full px-4 py-4 lg:px-20 text-2xl sm:text-xl">
      <!-- Logo & Title -->
      <div class="flex gap-4 items-center">
        <img src="/src/assets/image/ITE.png" alt="Logo" class="w-[60px] md:w-[80px] lg:w-[110px]" />
        <div class="hidden lg:block pt-[20px] text-[24px] font-bold leading-tight">
          <h1>វិស្វកម្មបច្ចេកវិទ្យាព័ត៌មាន</h1>
          <h1>Information Technology Engineering</h1>
        </div>
      </div>

      <!-- Desktop Navigation + Dark Mode Toggle -->
      <div class="items-center gap-4 pt-[40px] text-[16px] font-bold flex">
        <nav class="hidden md:flex gap-2">
          <ul class="flex gap-2">
            <li v-for="(item, index) in navItems" :key="index">
              <RouterLink
                :to="item.path"
                class="block hover:underline hover:bg-gray-200 aria-[current=page]:text-blue-600 dark:hover:bg-gray-700 hover:rounded-lg p-2 transition duration-300"
                :aria-current="$route.path === item.path ? 'page' : null"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <button
          class="hidden lg:block border-[0.5px] border-blue-900 px-2 py-2 rounded-lg hover:bg-gray-200 hover:text-black dark:hover:bg-[#014164] dark:hover:text-[#014164] transition duration-200"
          @click="toggleDarkMode"
        >
          <FontAwesomeIcon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" :class="isDark ? 'text-white' : 'text-black'" />
        </button>
      </div>

      <!-- Mobile Section -->
      <div class="flex md:hidden items-center gap-2">
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-md border border-blue-900 text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <FontAwesomeIcon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" class="w-4 h-4" />
        </button>
        <div class="md:hidden flex items-center justify-center gap-5">
          <Menu />
        </div>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode.ts'
import {  useRouter, RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Menu from './Menu.vue'

// Dark mode toggle
const { isDark, toggleDarkMode } = useDarkMode()

// Router and current route
const router = useRouter()
// Dynamically generate nav items from router
const navItems = computed(() =>
  router.getRoutes()
    // Routes to only include those with a path and title
    .filter(r =>
      ['/', '/about', '/library', '/resources', '/databases', '/contact'].includes(r.path)
    )
    // Map to desired format
    .map(r => ({
      name: r.meta?.title || capitalize(r.name?.toString() || r.path.replace('/', '')),
      path: r.path
    }))
)
// Function to capitalize the first letter of a string
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


defineOptions({ name: 'AppHeader' })
</script>
