import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import React from 'react'
const FriendCard = React.memo<Friend>((props) => {
  console.log('FriendCard')
  const { name, avatar, descr, url } = props
  return (
    <div className="friend-card">
      <a href={url} target="_blank" tabIndex={-1}>
        <img src={avatar} alt={`${name}'s avatar`} width="50" height="50" />
        <h2>{name}</h2>
        <p>{descr}</p>
      </a>
    </div>
  )
})
export default FriendCard
