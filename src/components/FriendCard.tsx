import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import { useRef, useEffect, forwardRef } from 'react'
import Draggable from 'react-draggable'
function FriendCard(
  { name, avatar, link, said }: Friend,
  card_ref: React.ForwardedRef<HTMLDivElement>
) {
  const title = useRef<HTMLHeadingElement>(null)
  const text = useRef<HTMLParagraphElement>(null)
  const card_container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (title.current && text.current) {
      const title_width = `${(title.current.offsetWidth - 5).toString()}px`
      text.current.style.maxWidth = title_width
    }
    if (card_container.current && text.current) {
      const pH = text.current.offsetHeight
      console.log(pH)
      card_container.current.style.setProperty('--leng-pb', `${pH + 26}px`)
    }
  }, [])
  return (
    <Draggable>
      <div className="friend-card" ref={card_ref}>
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
    </Draggable>
  )
}

export default forwardRef<HTMLDivElement, Friend>(FriendCard)
