import { useEffect } from 'react'

// memorize the theme and get the theme from localStorage
// if the theme is not saved, use the system theme
// if the theme is saved, use the saved theme
// if the theme is saved and the system theme is changed, use the system theme
// if the theme is not saved and the system theme is changed, use the system theme
// true-dark false-light
export const useTheme = (setTheme: (isDark: boolean) => void) => {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      setTheme(savedTheme === 'dark')
    } else {
      setTheme(prefersDarkScheme.matches)
    }

    const themeChangeListener = (e: MediaQueryListEvent) => {
      setTheme(e.matches)
    }

    prefersDarkScheme.addEventListener('change', themeChangeListener)

    return () => {
      prefersDarkScheme.removeEventListener('change', themeChangeListener)
    }
  }, [setTheme])
}
