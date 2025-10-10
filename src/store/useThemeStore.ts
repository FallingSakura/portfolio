import { create } from "zustand";

type themes = "Gradient" | "Default" | "Transparent";

type ThemeStore = {
  theme: themes;
  toggleTheme: (theme: themes) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "Gradient",
  toggleTheme: (theme) => {
    set({ theme: theme });
    localStorage.setItem("theme", theme);
  },
}));

export type { themes };