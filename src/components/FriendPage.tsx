import '@/styles/friend-page.css'
import { useRef, useEffect, useState, useCallback } from 'react'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'
function FriendPage() {
  const refs = useRef<HTMLDivElement[]>([])
  const container_ref = useRef<HTMLDivElement>(null)
  const [currentZIndex, setCurrentZIndex] = useState(10)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const handleChildActivate = useCallback(() => {
    setCurrentZIndex((prev) => prev + 1)
  }, [])
  const setRef = (index: number, element: HTMLDivElement | null) => {
    if (element) {
      refs.current[index] = element
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    const PAD = window.innerWidth < 768 ? 15 : 25
    let posL = PAD
    let posT = PAD
    const max_width =
      container_ref.current !== null
        ? container_ref.current.offsetWidth
        : window.innerWidth
    refs.current.forEach((ref: HTMLDivElement) => {
      if (posL + ref.offsetWidth > max_width) {
        posT += 80
        posL = PAD
      }
      ref.style.top = posT.toString() + 'px'
      ref.style.left = posL.toString() + 'px'
      posL += ref.offsetWidth + (PAD * 3) / 5
    })
  }, [windowWidth])
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
}

export default FriendPage
