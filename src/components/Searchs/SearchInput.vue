<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faSearch)
library.add(faChevronDown)
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
    class="bg-white dark:bg-gray-900 py-8 px-4 sm:px-[60px] flex gap-2"
    @submit.prevent="onSearch"
  >
    <label for="search" class="sr-only">Search by title, author, or ISBN</label>
    <!-- Category button -->
    <button
      type="button"
      class=" font-bold px-[20px] lg:px-[40px] md:px-[30px] py-3 sm:py-2 sm:px-[20px] rounded-l-lg border bg-white dark:bg-white hover:bg-gray-100 hover:dark:bg-gray-300 hover:dark:text-black transition duration-150"
      :disabled="!q"
    >
      All
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </button>

    <!-- Search input -->
    <input
      id="search"
      v-model.trim="q"
      type="text"
      placeholder="Search by: title, author, or ISBN..."
      class=" px-4 py-3 w-[80%] sm:py-4 border border-l-0 sm:rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 text-gray-900 dark:text-black"
    />
    <!-- Submit button -->
    <button
      type="submit"
      class="px-[20px] lg:px-[40px] md:px-[30px] py-3 sm:py-2 sm:px-[20px] rounded-r-lg border border-l-0 bg-white text-black font-bold hover:bg-gray-300 transition duration-300"
      :disabled="!q"
    >
      Go
      <font-awesome-icon :icon="['fas', 'search']" />
    </button>
  </form>
</template>
