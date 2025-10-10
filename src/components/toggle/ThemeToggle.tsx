import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useLightDark } from "../../hooks/useLightDark";
import React, { useRef, useState } from "react";
import styles from "@/styles/components/toggle/ThemeToggle.module.css";
import { themes } from "../../store/useThemeStore";
import { useTheme } from "../../hooks/useTheme";
const ThemeToggle = React.memo(() => {
  const [theme, toggleTheme] = useTheme();
  const [themeMode, toggleThemeMode] = useLightDark();
  const [isActive, setIsActive] = useState(false);
  const [isBackgroundActive, setIsBackgroundActive] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const thumbnailMap: Record<themes, string> = {
    Gradient: "pink",
    Default: "black",
    Transparent: "transparent",
  };
  const themeComponents = [
    <div
      className={`${styles["light-dark"]}`}
      onClick={() => toggleThemeMode()}
    >
      <FontAwesomeIcon
        className={`${styles["icon"]} ${themeMode ? styles["visible"] : styles["hidden"]}`}
        icon={faSun}
        size="lg"
      />
      <FontAwesomeIcon
        className={`${styles["icon"]} ${themeMode ? styles["hidden"] : styles["visible"]}`}
        icon={faMoon}
        size="lg"
      />
    </div>,

    <div
      className={styles["background"]}
      ref={backgroundRef}
      onMouseEnter={() => setIsBackgroundActive(true)}
      onMouseLeave={(event) => {
        if (!backgroundRef.current?.contains(event.relatedTarget as Node)) {
          setIsBackgroundActive(false);
        }
      }}
    >
      <div
        className={styles["current-background"]}
        style={{
          background: thumbnailMap[theme],
        }}
      ></div>
      {isBackgroundActive && (
        <div className={styles["background-options"]}>
          <div
            className={styles["background-option"]}
            onClick={() => toggleTheme("Gradient")}
          >
            Gradient
          </div>
          <div
            className={styles["background-option"]}
            onClick={() => toggleTheme("Default")}
          >
            Default
          </div>
          <div
            className={styles["background-option"]}
            onClick={() => toggleTheme("Transparent")}
          >
            Transparent
          </div>
        </div>
      )}
    </div>,
  ];
  return (
    <div className={`${styles["theme-toggle"]} ${isActive ? "active" : ""}`}>
      <div className={`${styles["theme-toggle-panel"]}`}>
        <div
          className={`${styles["drop-down"]}`}
          onClick={() => setIsActive((prev) => !prev)}
        >
          {isActive ? (
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={faChevronDown}
              size="sm"
            />
          ) : (
            <FontAwesomeIcon
              className={styles["icon"]}
              icon={faPalette}
              size="sm"
            />
          )}
        </div>
        {themeComponents.map((component, index) => (
          <div
            key={index}
            className={styles["theme-toggle-item"]}
            style={{
              bottom: (index + 1) * 55 + "px",
              transform: `${isActive ? "translateY(0)" : `translateY(${(index + 1) * 50}px)`}`,
            }}
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ThemeToggle;
