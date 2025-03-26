import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import React from 'react'
const FriendCard = React.memo<Friend>((props) => {
  const { name, avatar, descr, url } = props
  return (
    <div className="friend-card">
      <a href={url} target="_blank" tabIndex={-1}>
        <div className="friend-avatar">
          <img src={avatar} alt={`${name}'s avatar`} />
        </div>
        <h2 className="friend-name">{name}</h2>
        <p className="friend-descr">{descr}</p>
      </a>
    </div>
  )
})
export default FriendCard
