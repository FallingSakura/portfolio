import styles from "@/styles/components/friend/FriendCard.module.css";
import { Friend } from "../../types/friend";
import React from "react";
import { forwardRef } from "react";
const FriendCard = forwardRef<HTMLDivElement, Friend>((props, ref) => {
  const { name, avatar, descr, url } = props;
  return (
    <div ref={ref} className={`${styles["friend-card"]} card`}>
      <a href={url} target="_blank" tabIndex={-1}>
        <div className={`${styles["friend-avatar"]}`}>
          <div className={styles.mask}></div>
          <img src={avatar} alt={`${name}'s avatar`} />
        </div>
        <h2 className={`${styles["friend-name"]}`}>{name}</h2>
        <p className={`${styles["friend-descr"]}`}>{descr}</p>
      </a>
    </div>
  );
});

export default React.memo(FriendCard);
