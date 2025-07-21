<template>
  <section class="flex px-20 py-4 w-full text-2xl text-white justify-between bg-[#640D5F]">
    <div class="flex gap-4">
      <img src="/src/assets/image/logo.png" class="w-[110px]" alt="Logo">
      <div class="text-[24px] pt-[20px]">
        <h1>សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ</h1>
        <h1>Royal University of Phnom Penh</h1>
      </div>
    </div>
    <div class="text-[18px] pt-[50px]">
      <ul class="flex justify-center mt-auto">
        <button class="hover:underline hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-2">
          <RouterLink to="/">Home</RouterLink>
        </button>
        <button class="hover:underbuttonne hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-2">
          <RouterLink to="/about">about</RouterLink>
        </button>
        <botton class="hover:underline hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-2">
          <RouterLink to="/library">Collections</RouterLink>
        </botton>
        <botton class="hover:underline hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-2">
          <RouterLink to="/library">Resources</RouterLink>
        </botton>
        <botton class="hover:underline hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-2">
          <RouterLink to="/library">Databases</RouterLink>
        </botton>
        <botton class="hover:underline hover:transform hover:duration-500 hover:bg-gray-500 hover:rounded-lg p-2">
          <RouterLink to="/library">Contact Us</RouterLink>
        </botton>
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

