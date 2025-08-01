<template>
  <div class="p-0 w-fullmx-auto">
    <!-- Search input -->
    <SearchInput v-model="search" placeholder="Search items..." />

    <!-- Show results only if search has content -->
    <div v-if="search.trim()" class="mt-6">
      <!-- Results -->
      <SearchResults v-if="filteredItems.length" :items="filteredItems" />
      <!-- No result -->
      <div v-else class="mt-4 text-gray-500 text-center">
        No results found for "{{ search }}"
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SearchInput from '@/components/Searchs/SearchInput.vue'
import SearchResults from '@/components/Searchs/SearchResult.vue'

export default {
  name: 'SearchPage',
  components: {
    SearchInput,
    SearchResults
  },
  data() {
    return {
      search: '',
      items: [
        { id: 1, name: 'Vue.js' },
        { id: 2, name: 'Tailwind CSS' },
        { id: 3, name: 'Alpine.js' },
        { id: 4, name: 'Nuxt' }
      ]
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>
