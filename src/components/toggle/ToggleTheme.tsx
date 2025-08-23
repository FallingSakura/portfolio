import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import React from "react";
import styles from "@/styles/ToggleTheme.module.css";
const ToggleTheme = React.memo(() => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className={`${styles["toggle-theme"]}`} onClick={toggleTheme}>
      <FontAwesomeIcon
        className={`${styles["icon"]} ${theme ? styles["visible"] : styles["hidden"]}`}
        icon={faSun}
        size="lg"
      />
      <FontAwesomeIcon
        className={`${styles["icon"]} ${theme ? styles["hidden"] : styles["visible"]}`}
        icon={faMoon}
        size="lg"
      />
    </div>
  );
});

export default ToggleTheme;
