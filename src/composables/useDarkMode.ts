// src/composables/useDarkMode.ts
import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateClass()
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  const updateClass = () => {
    const html = document.documentElement
    html.classList.toggle('dark', isDark.value)
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      isDark.value = true
    } else if (saved === 'light') {
      isDark.value = false
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateClass()
  })

  return { isDark, toggleDarkMode }
}
