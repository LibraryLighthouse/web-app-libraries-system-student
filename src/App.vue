<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/Header/userHeader.vue'
// import AppFooter from '@/components/Footer/Footer.vue'
</script>

<template>
  <div>
    <AppHeader />
    <main >
      <RouterView/>
    </main>
  </div>
</template>

