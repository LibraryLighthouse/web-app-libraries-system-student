<script setup lang="ts">
defineOptions({ name: 'AppSearch' })
import { ref, computed } from 'vue'

const q = ref('')

// Example data (could come from API)
const books = ref([
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', isbn: '9780132350884' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', isbn: '9780201616224' },
  { id: 3, title: 'You Don’t Know JS', author: 'Kyle Simpson', isbn: '9781491904244' },
  { id: 4, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', isbn: '9780262033848' }
])

// Filtered results
const results = computed(() => {
  if (!q.value.trim()) return []
  return books.value.filter(book =>
    [book.title, book.author, book.isbn].some(field =>
      field.toLowerCase().includes(q.value.toLowerCase())
    )
  )
})

function onSearch() {
  console.log('Searching for:', q.value)
}
</script>

<template>
  <div class="p-4 sm:px-[60px] bg-white dark:bg-gray-900 min-h-screen">
    <!-- Search Form -->
    <form
      class="flex flex-col sm:flex-row gap-2"
      @submit.prevent="onSearch"
    >
      <label for="search" class="sr-only">Search by title, author, or ISBN</label>

      <button
        type="button"
        class="font-medium px-4 py-3 sm:py-4 rounded sm:rounded-l-lg border bg-white dark:bg-white hover:bg-gray-100 hover:dark:bg-gray-300 hover:dark:text-black transition duration-150"
        :disabled="!q"
      >
        All
        <font-awesome-icon icon="fa-regular fa-chevron-down" />
      </button>


      <input
        id="search"
        v-model.trim="q"
        type="text"
        placeholder="Search by: title, author, or ISBN..."
        class="flex-1 px-4 py-3 sm:py-4 border border-l-0 sm:rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 text-gray-900 dark:text-black"
      />

      <button
        type="submit"
        class="px-4 py-3 sm:py-4 rounded sm:rounded-r-lg border border-l-0 bg-blue-500 text-white hover:bg-blue-600 transition disabled:opacity-50"
        :disabled="!q"
      >
        Go
      </button>
    </form>

    <!-- Search Results -->
    <div v-if="q && results.length" class="mt-6 space-y-4">
      <div
        v-for="book in results"
        :key="book.id"
        class="p-4 border rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
      >
        <h3 class="text-lg font-semibold">{{ book.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">Author: {{ book.author }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">ISBN: {{ book.isbn }}</p>
      </div>
    </div>

    <!-- No result -->
    <div v-if="q && results.length === 0" class="mt-6 text-gray-500 dark:text-gray-300">
      No results found for "{{ q }}"
    </div>
  </div>
</template>
