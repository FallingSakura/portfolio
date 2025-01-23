import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import {
  useRef,
  useEffect,
  useState,
  forwardRef,
} from 'react'
function FriendCard(
  { name, avatar, link, said }: Friend,
  card_ref: React.ForwardedRef<HTMLDivElement>
) {
  const title = useRef<HTMLHeadingElement>(null)
  const text = useRef<HTMLParagraphElement>(null)
  const card_container = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
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
  const activate = () => {
    if (isActive) return
    setIsActive(true)
  }
  const deactivate = () => {
    if (!isActive) return
    setIsActive(false)
  }
  return (
      <div
        className={`friend-card ${isActive ? 'active' : ''}`}
        ref={card_ref}
        onClick={activate}
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

export default forwardRef<HTMLDivElement, Friend>(FriendCard)
