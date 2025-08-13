import "@/styles/social-links.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBilibili,
  faTwitter,
  faGithub,
  faWeixin,
  faQq,
} from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <div className="social">
      <div className="links">
        <a href="https://space.bilibili.com/1722315602">
          <FontAwesomeIcon icon={faBilibili} size="xl" />
        </a>
        <a href="https://github.com/FallingSakura">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a href="https://x.com/SakuraFalling1">
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </a>
        <a className="wechat">
          <FontAwesomeIcon icon={faWeixin} size="xl" />
          <img src="/Wechat-QR.png" alt="Wechat QRCode" />
        </a>
        <a className="qq">
          <FontAwesomeIcon icon={faQq} size="xl" />
          <img src="/QQ-QR.png" alt="QQ QRCode" />
        </a>
      </div>
    </div>
  );
}
export default SocialLinks;
