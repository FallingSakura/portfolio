import { themes } from "../../store/useThemeStore";
import React from "react";
import styles from "@/styles/components/toggle/ThemeToggle.module.css";

const BackgroundOption = React.memo(
  ({
    theme,
    toggleTheme,
  }: {
    theme: themes;
    toggleTheme: (theme: themes) => void;
  }) => {
    return (
      <div
        className={styles["background-option"]}
        onClick={() => toggleTheme(theme)}
      >
        {theme}
      </div>
    );
  },
);

export default BackgroundOption;
