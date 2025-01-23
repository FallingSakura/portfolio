import '@/styles/friend-page.css'
import { useRef, useEffect } from 'react'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'
function FriendPage() {
  const refs = useRef<HTMLDivElement[]>([])
  const setRef = (index: number, element: HTMLDivElement | null) => {
    if (element) {
      refs.current[index] = element
    }
  }
  useEffect(() => {
    let posL = 25;
    let posT = 25;
    refs.current.forEach((ref: HTMLDivElement, index: number) => {
      ref.style.top = posT.toString() + 'px'
      ref.style.left = posL.toString() + 'px'
      posL += ref.offsetWidth + 15
    })
  })
  return (
    <div className="friend" id="friend">
      <div className="friend-cards-container">
        {friends.map((friend, index) => (
          <FriendCard {...friend} ref={(el) => setRef(index, el)} key={friend.name} />
        ))}
      </div>
    </div>
  )
}

export default FriendPage
