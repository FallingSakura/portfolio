import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import { useRef, useEffect } from 'react'
function FriendCard({
  name,
  avatar,
  link,
  said,
}: Friend) {
  const title = useRef<HTMLHeadingElement>(null)
  const text = useRef<HTMLParagraphElement>(null)
  const card_container = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    if (title.current && text.current) {
      const title_width = `${(title.current.offsetWidth - 5).toString()}px`
      text.current.style.maxWidth = title_width
    }
    if (card_container.current && text.current) {
      const pH = text.current.offsetHeight
      card_container.current.style.setProperty('--leng-pb', `${pH + 26}px`)
    }
  }, [])
  return (
    <>
      <div className="friend-card">
        <a
          className="friend-card-container"
          href={link}
          target="_blank"
          ref={card_container}
        >
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${avatar})`
            }}
          ></div>
          <h3 ref={title}>{name}</h3>
        </a>
        <span ref={text}>{said}</span>
      </div>
    </>
  )
}

export default FriendCard
