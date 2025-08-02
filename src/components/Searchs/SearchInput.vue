<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineOptions({
  name: 'AppSearch',
  components: { FontAwesomeIcon },
 })
import { ref } from 'vue'

const q = ref('')

function onSearch() {
  // Do your search here (emit, navigate, call API, etc.)
  console.log('Searching for:', q.value)
}
</script>

<template>
  <form
    class="bg-white dark:bg-gray-900 py-8 px-4 sm:px-[60px] flex flex-col sm:flex-row gap-2"
    @submit.prevent="onSearch"
  >
    <label for="search" class="sr-only">Search by title, author, or ISBN</label>
    <!-- Category button -->
    <button
      type="button"
      class="font-medium px-4 py-3 sm:py-4 rounded sm:rounded-l-lg border bg-white dark:bg-white hover:bg-gray-100 hover:dark:bg-gray-300 hover:dark:text-black transition duration-150"
      :disabled="!q"
    >
      All
    <font-awesome-icon icon="fa-regular fa-chevron-down" />
    </button>

    <!-- Search input -->
    <input
      id="search"
      v-model.trim="q"
      type="text"
      placeholder="Search by: title, author, or ISBN..."
      class="flex-1 px-4 py-3 sm:py-4 border border-l-0 sm:rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 text-gray-900 dark:text-black"
    />
    <!-- Submit button -->
    <button
      type="submit"
      class="px-4 py-3 sm:py-4 rounded sm:rounded-r-lg border border-l-0 bg-blue-500 text-white hover:bg-blue-600 transition disabled:opacity-50"
      :disabled="!q"
    >
      Go
    </button>
  </form>
</template>
