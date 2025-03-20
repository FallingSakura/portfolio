import '@/styles/friend-page.css'
import { useRef, useState, useCallback } from 'react'
import React from 'react'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'
const FriendPage = React.memo(() => {
  console.log('FriendPage')
  const refs = useRef<HTMLDivElement[]>([])
  const container_ref = useRef<HTMLDivElement>(null)
  const [currentZIndex, setCurrentZIndex] = useState(10)
  const handleChildActivate = useCallback(() => {
    setCurrentZIndex((prev) => prev + 1)
  }, [])
  const setRef = (index: number, element: HTMLDivElement | null) => {
    if (element) {
      refs.current[index] = element
    }
  }
  return (
    <div className="friend" id="friend">
      <div className="friend-cards-container" ref={container_ref}>
        {friends.map((friend, index) => (
          <FriendCard
            {...friend}
            ref={(el) => setRef(index, el)}
            key={friend.name + index.toString()}
            currentZIndex={currentZIndex}
            onActivate={handleChildActivate}
          />
        ))}
      </div>
    </div>
  )
})

export default FriendPage
