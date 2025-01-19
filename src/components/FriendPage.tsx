import '@/styles/friend-page.css'
import { useRef } from 'react'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'
function FriendPage() {
  const refs = useRef<Object[]>([])
  const setRef = (index: number, element: Object | null) => {
    if (element) {
      refs.current[index] = element
    }
  }
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
