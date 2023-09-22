import { ref, watch } from 'vue'
import type { Ref } from 'vue'

type Theme = 'light' | 'dark'

interface UseTheme {
  theme: Ref<Theme>
  toggleTheme: () => void
}

const useTheme = (): UseTheme => {
  const localTheme = localStorage.getItem('theme') as Theme || 'light'
  const theme = ref<Theme>(localTheme)

  watch(theme, (value) => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(value)
  }, { immediate: true })

  const toggleTheme = (): void => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme.value)
  }

  return {
    theme,
    toggleTheme
  }
}

export type { Theme }
export default useTheme
