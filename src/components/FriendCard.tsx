import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import { useRef, useEffect, useState, forwardRef } from 'react'
function FriendCard(
  props: Friend & { currentZIndex: number; onActivate: () => void },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { name, avatar, link, said, currentZIndex, onActivate } = props
  const title = useRef<HTMLHeadingElement>(null)
  const text = useRef<HTMLParagraphElement>(null)
  const card_container = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = useState(false)
  const setRef = (el: HTMLDivElement) => {
    cardRef.current = el
    if (typeof ref === 'function') {
      ref(el)
    } else if (ref) {
      ref.current = el
    }
  }
  useEffect(() => {
    if (title.current && text.current) {
      const title_width = `${(title.current.offsetWidth - 3).toString()}px`
      text.current.style.maxWidth = title_width
    }
    if (card_container.current && text.current) {
      const pB = text.current.offsetHeight
      card_container.current.style.setProperty('--leng-pb', `${pB + 30}px`)
    }
  }, [])
  const activate = () => {
    if (isActive) return
    onActivate()
    if (cardRef.current) {
      cardRef.current.style.zIndex = currentZIndex.toString()
    }
    setIsActive(true)
  }
  const deactivate = () => {
    if (!isActive) return
    setIsActive(false)
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.zIndex = '1'
      }
    }, 500)
  }
  return (
    <div
      className={`friend-card ${isActive ? 'active' : ''}`}
      ref={setRef}
      // onClick={activate}
      onMouseOver={activate}
      onMouseLeave={deactivate}
    >
      <div className="friend-card-container" ref={card_container}>
        <div
          className="avatar"
          style={{
            backgroundImage: `url(${avatar})`
          }}
        ></div>
        <a href={link} target="_blank">
          <h3 ref={title}>{name}</h3>
        </a>
      </div>
      <span ref={text}>{said}</span>
    </div>
  )
}

export default forwardRef<
  HTMLDivElement,
  Friend & { currentZIndex: number; onActivate: () => void }
>(FriendCard)
