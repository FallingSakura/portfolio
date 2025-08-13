import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import React from "react";
import "@/styles/toggle-theme.css";
const ToggleTheme = React.memo(() => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="toggle-theme" onClick={toggleTheme}>
      <FontAwesomeIcon
        className={`icon ${theme ? "visible" : "hidden"}`}
        icon={faSun}
        size="lg"
      />
      <FontAwesomeIcon
        className={`icon ${theme ? "hidden" : "visible"}`}
        icon={faMoon}
        size="lg"
      />
    </div>
  );
});

export default ToggleTheme;
