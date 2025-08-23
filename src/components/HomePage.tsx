import SocialLinks from "./SocialLinks";
import React from "react";
import styles from "@/styles/home-page.module.css";
import ScrollToBottom from "./ScrollToBottom";
const HomePage = React.memo(() => {
  return (
    <div className={`${styles["home"]}`} id="home">
      <div className={`${styles["home-container"]}`}>
        <div className={`${styles["about"]}`}>
          <div className={`${styles["img-container"]}`}>
            <div className={`${styles["img"]}`}>
              <a href="/">
                <img
                  src="https://falling-sakura1-1316699389.cos.ap-nanjing.myqcloud.com/image/202506261445515.jpeg"
                  alt="avatar"
                />
              </a>
            </div>
          </div>
          <div className={`${styles["title"]}`}>
            <h1>
              <span>Hi, I'm </span>
              <span id="name" className={`${styles["name"]}`}>
                FallingSakura
              </span>
            </h1>
          </div>
        </div>
        <SocialLinks />
      </div>
      <ScrollToBottom />
    </div>
  );
});

export default HomePage;
