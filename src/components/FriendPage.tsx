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
    const PAD = window.innerWidth < 768 ? 5 : 25
    let posL = PAD;
    let posT = PAD;
    const max_width = window.innerWidth
    refs.current.forEach((ref: HTMLDivElement) => {
      if (posL + ref.offsetWidth > max_width) {
        posT += 80
        posL = PAD
      }
      ref.style.top = posT.toString() + 'px'
      ref.style.left = posL.toString() + 'px'
      posL += ref.offsetWidth + PAD * 3 / 5
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
