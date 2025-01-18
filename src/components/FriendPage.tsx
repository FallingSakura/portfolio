import '@/styles/friend-page.css'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'
function FriendPage() {
  return (
    <div className="friend" id="friend">
      <div className="container">
        {friends.map((friend, index) => (
          <FriendCard {...friend} index={index} key={friend.name} />
        ))}
      </div>
    </div>
  )
}

export default FriendPage
