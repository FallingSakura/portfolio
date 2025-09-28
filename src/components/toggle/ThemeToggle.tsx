import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useLightDark } from "../../hooks/useLightDark";
import React, { useState } from "react";
import styles from "@/styles/components/toggle/ThemeToggle.module.css";
const ThemeToggle = React.memo(() => {
  const [theme, toggleTheme] = useLightDark();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${styles["theme-toggle"]}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={`${styles["theme-toggle-panel"]} card`}>
        <div className={`${styles["theme-toggle-container"]}`}>
          <div
            className={`${styles["light-dark-container"]}`}
            onClick={toggleTheme}
          >
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
        </div>
      </div>
    </div>
  );
});

export default ThemeToggle;
