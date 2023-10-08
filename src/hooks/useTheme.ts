import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface UseTheme {
  theme: Ref<Theme>
  toggleTheme: () => void
}

const useTheme = (): UseTheme => {
  const theme = ref<Theme>(Theme.LIGHT)

  const applyTheme = (): void => {
    document.documentElement.classList.remove(Theme.LIGHT, Theme.DARK)
    document.documentElement.classList.add(theme.value)
  }


  const setTheme = (newTheme: Theme): void => {
    theme.value = newTheme
    localStorage.setItem('theme', theme.value)
    applyTheme()
  }

  const toggleTheme = (): void => {
    const newTheme = theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
  }

  onMounted(() => {
    const isSystemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const systemTheme = isSystemDark ? Theme.DARK : Theme.LIGHT
    const localTheme = (localStorage.getItem('theme') as Theme) || systemTheme
    setTheme(localTheme)
  })

  return {    
    theme,
    toggleTheme
  }
}

export type { Theme }
export default useTheme
