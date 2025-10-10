import { useEffect } from "react";
import { themes } from "../store/useThemeStore";
import { useThemeStore } from "../store/useThemeStore";

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      toggleTheme(savedTheme as themes);
    }
  }, [toggleTheme]);
  return [theme, toggleTheme] as const;
};