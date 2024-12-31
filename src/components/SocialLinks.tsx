import '../styles/SocialLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBilibili,
  faTwitter,
  faGithub,
  faWeixin,
  faQq
} from '@fortawesome/free-brands-svg-icons'

function SocialLinks() {
  return (
    <div className="social flex">
      <div className="links flex">
        <a href="https://space.bilibili.com/1722315602">
          <FontAwesomeIcon icon={faBilibili} size="xl" />
        </a>
        <a href="https://github.com/FallingSakura">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a href="https://x.com/SakuraFalling1">
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faWeixin} size="xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faQq} size="xl" />
        </a>
      </div>
    </div>
  )
}
export default SocialLinks
