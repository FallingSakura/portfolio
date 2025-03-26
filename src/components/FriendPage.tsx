import '@/styles/friend-page.css'
import { useRef } from 'react'
import React from 'react'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'
const FriendPage = React.memo(() => {
  const container_ref = useRef<HTMLDivElement>(null)
  return (
    <div className="friend" id="friend">
      <div className="friend-cards-container" ref={container_ref}>
        {friends.map((friend, index) => (
          <FriendCard {...friend} key={`${friend.name}${index}`} />
        ))}
      </div>
    </div>
  )
})

export default FriendPage
