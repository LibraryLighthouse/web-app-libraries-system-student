<template>
  <section class="flex px-20 py-30 w-full h-[220px] bg-center bg-no-repeat bg-cover text-2xl text-white justify-between bg-[url(src/assets/image/bg-rupp.png)]">
    <div class="">
        logo
      </div>
      <div class="text-2xl">
        <ul class="flex justify-center gap-4 mt-auto">
          <div class="hover:underline hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-4">
            <li><RouterLink to="/">Home</RouterLink></li>
          </div>
          <div class="hover:underline hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-4">
            <li><RouterLink to="/about">Koha</RouterLink></li>
          </div>
          <div class="hover:underline hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-4">
            <li><RouterLink to="/library">Library</RouterLink></li>
          </div>
        </ul>
      </div>
    </section>
    <main>
      <RouterView />
    </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
defineOptions({
  name: 'AppHeader'
})
</script>

