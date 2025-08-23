import "@/styles/friend/friend-card.css";
import { Friend } from "../../types/friend";
import React from "react";
import { forwardRef } from "react";
const FriendCard = forwardRef<HTMLDivElement, Friend>((props, ref) => {
  const { name, avatar, descr, url } = props;
  return (
    <div ref={ref} className="friend-card card">
      <a href={url} target="_blank" tabIndex={-1}>
        <div className="friend-avatar">
          <img src={avatar} alt={`${name}'s avatar`} />
        </div>
        <h2 className="friend-name">{name}</h2>
        <p className="friend-descr">{descr}</p>
      </a>
    </div>
  );
});

export default React.memo(FriendCard);
