import '@/styles/friend-card.css'
import { Friend } from '../types/friend' 
function FriendCard({ name, avatar, link, said, index }: (Friend & {index:number})) {
  const prop = index
  console.log(prop)
  return (
    <div className="friend-card">
      <a className="card-container" href={link}>
        <div className="avatar" style={{
          backgroundImage: `url(${avatar})`
        }}></div>
        <h3>{name}</h3>
        <p>{said}</p>
      </a>
    </div>
  )
}

export default FriendCard
