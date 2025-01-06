import { useEffect } from 'react';

export const useTheme = (setTheme: (isDark: boolean) => void) => {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme === 'dark');
    } else {
      setTheme(prefersDarkScheme.matches);
    }

    const themeChangeListener = (e: MediaQueryListEvent) => {
      setTheme(e.matches);
    };

    prefersDarkScheme.addEventListener('change', themeChangeListener);

    return () => {
      prefersDarkScheme.removeEventListener('change', themeChangeListener);
    };
  }, [setTheme]);
};
