import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import { useRef, useEffect, useState, forwardRef } from 'react'
function FriendCard(
  props: Friend,
  card_ref: React.ForwardedRef<HTMLDivElement>
) {
  const { name, avatar, link, said } = props
  const title = useRef<HTMLHeadingElement>(null)
  const text = useRef<HTMLParagraphElement>(null)
  const card_container = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
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
    console.log(typeof card_ref)
    setIsActive(true)
  }
  const deactivate = () => {
    if (!isActive) return
    setIsActive(false)
    // setTimeout(() => {
    //   if (typeof card_ref !== 'function' && card_ref?.current) {
    //     card_ref.current.style.zIndex = '0'
    //   }
    // }, 500)
  }
  return (
    <div
      className={`friend-card ${isActive ? 'active' : ''}`}
      ref={card_ref}
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

export default forwardRef<HTMLDivElement, Friend>(FriendCard)
