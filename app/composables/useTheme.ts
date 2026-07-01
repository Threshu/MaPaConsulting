export const useTheme = () => {
  const isDark = useState('isDark', () => true)

  const apply = (dark: boolean) => {
    if (import.meta.client) {
      if (dark) {
        document.documentElement.removeAttribute('data-theme')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }
  }

  const toggle = () => {
    isDark.value = !isDark.value
    apply(isDark.value)
    localStorage.setItem('mapa-theme', isDark.value ? 'dark' : 'light')
  }

  const init = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('mapa-theme')
      if (stored) {
        isDark.value = stored === 'dark'
      }
      apply(isDark.value)
    }
  }

  return { isDark, toggle, init }
}
