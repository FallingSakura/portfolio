import styles from "@/styles/background.module.css";

const Background = () => {
  return (
    <div className={`${styles["background-container"]}`}>
      <div className={`${styles["gradient-bg"]}`}>
        <div className={`${styles["gradients-container"]}`}>
          <div className={`${styles["g1"]}`}></div>
          <div className={`${styles["g2"]}`}></div>
          <div className={`${styles["g3"]}`}></div>
        </div>
      </div>
      <div className={`${styles["blur-effect"]}`}></div>
    </div>
  );
};

export default Background;
