import { useEffect, useState } from "react";

// memorize the theme and get the theme from localStorage
// if the theme is not saved, use the system theme
// if the theme is saved, use the saved theme
// if the theme is saved and the system theme is changed, use the system theme
// if the theme is not saved and the system theme is changed, use the system theme
// true-dark false-light
export const useLightDark = () => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme === "dark");
    } else {
      setTheme(prefersDarkScheme.matches);
    }

    const themeChangeListener = (e: MediaQueryListEvent) => {
      setTheme(e.matches);
    };

    prefersDarkScheme.addEventListener("change", themeChangeListener);

    return () => {
      prefersDarkScheme.removeEventListener("change", themeChangeListener);
    };
  }, [setTheme]);
  useEffect(() => {
    if (theme) {
      /* documentElement = <html><html/> */
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);
  return [theme, toggleTheme] as const;
};
