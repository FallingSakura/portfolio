import styles from "@/styles/toggle-button.module.css";
import React from "react";
import { useToggleStore } from "../../store/useToggleStore";

const ToggleButton = React.memo(() => {
  const togglNav = useToggleStore((state) => state.togglNav);
  const toggle = useToggleStore((state) => state.toggle);
  return (
    <div className={`${styles["toggle-button"]}`} onClick={toggle}>
      <div className={`${styles["toggle-button-container"]}`}>
        <span
          className={`${styles["toggle-bar"]} ${togglNav ? styles["bar-hidden"] : styles["bar1"]}`}
        ></span>
        <span
          className={`${styles["toggle-bar"]} ${togglNav ? styles["bar-rotate-45"] : styles["bar2"]}`}
        ></span>
        <span
          className={`${styles["toggle-bar"]} ${togglNav ? styles["bar-rotate--45"] : styles["bar3"]}`}
        ></span>
      </div>
    </div>
  );
});

export default ToggleButton;
