<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/Header/Header.vue'
import AppFooter from '@/components/Footer/Footer.vue'
</script>

<template>
  <header>
    <div>
    <AppHeader/>
    <AppFooter/>
    </div>
  </header>
  <RouterView />
</template>

