import { useEffect, useState } from "react";

// memorize the theme and get the theme from localStorage
// if the theme is not saved, use the system theme
// if the theme is saved, use the saved theme
// if the theme is saved and the system theme is changed, use the system theme
// if the theme is not saved and the system theme is changed, use the system theme
// true-dark false-light
export const useLightDark = () => {
  const [themeMode, setThemeMode] = useState(false);
  const toggleThemeMode = (mode?: boolean) => {
    const newTheme = mode !== undefined ? mode : !themeMode;
    setThemeMode(newTheme);
    localStorage.setItem("themeMode", newTheme ? "dark" : "light");
  };
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem("themeMode");

    if (savedTheme) {
      setThemeMode(savedTheme === "dark");
    } else {
      setThemeMode(prefersDarkScheme.matches);
    }

    const themeChangeListener = (e: MediaQueryListEvent) => {
      setThemeMode(e.matches);
    };

    prefersDarkScheme.addEventListener("change", themeChangeListener);

    return () => {
      prefersDarkScheme.removeEventListener("change", themeChangeListener);
    };
  }, [setThemeMode]);
  useEffect(() => {
    if (themeMode) {
      /* documentElement = <html><html/> */
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [themeMode]);
  return [themeMode, toggleThemeMode] as const;
};
