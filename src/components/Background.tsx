import styles from "../styles/components/Background.module.css";
import React from "react";
import { themes } from "../store/useThemeStore";

const _gradientOrigins = ["g1", "g2", "g3"] as const;

const Background: React.FC<{ theme: themes }> = ({ theme }) => {
  const gradientList = _gradientOrigins.slice(0, 3);
  switch (theme) {
    case "Gradient":
      return (
        <div className={styles["background-container"]}>
          <div className={styles["blur-effect"]} aria-hidden="true" />
          <div className={styles["gradient-bg"]} aria-hidden="true">
            <div className={styles["gradients-container"]}>
              {gradientList.map((cls) => (
                <div key={cls} className={styles[cls]} aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>
      );
    case "Default":
      return (
        <div
          className={styles["background-container"]}
          aria-hidden="true"
        ></div>
      );
    case "Transparent":
      return (
        <div
          className={styles["background-container"]}
          aria-hidden="true"
        ></div>
      );
    default:
      return null;
  }
};

export default React.memo(Background);
