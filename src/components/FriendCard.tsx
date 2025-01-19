import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle
} from 'react'
import Draggable from 'react-draggable'
function FriendCard(
  { name, avatar, link, said }: Friend,
  card_ref: React.ForwardedRef<Object>
) {
  const local_ref = useRef<HTMLDivElement>(null)
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
  useImperativeHandle(card_ref, () => ({
    focus: () => {
      if (local_ref.current) {
        local_ref.current.style.border = '2px solid black'
      }
    }
  }))
  const activate = () => {
    if (isActive) return
    setIsActive(true)
  }
  const deactivate = () => {
    if (!isActive) return
    setIsActive(false)
  }
  return (
    <Draggable disabled={!isActive}>
      <div
        className={`friend-card ${isActive ? 'active' : ''}`}
        ref={local_ref}
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
    </Draggable>
  )
}

export default forwardRef<Object, Friend>(FriendCard)
