import { useEffect, useState } from "react";
export const useTheme = () => {
  const [theme, setTheme] = useState("A");
  const toggleTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  return [theme, toggleTheme] as const;
};
