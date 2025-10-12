import styles from "@/styles/components/SocialLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBilibili,
  faTwitter,
  faGithub,
  faWeixin,
  faQq,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

function SocialLinks() {
  return (
    <div className={`${styles["social"]}`}>
      <div className={`${styles["links"]}`}>
        <a
          href="https://space.bilibili.com/1722315602"
          title="Bilibili"
          target="_blank"
        >
          <FontAwesomeIcon icon={faBilibili} size="xl" />
        </a>
        <a
          href="https://github.com/FallingSakura"
          title="GitHub"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a href="https://vercel.fallingsakura.top" title="Blog" target="_blank">
          <FontAwesomeIcon icon={faBlog} size="xl" />
        </a>
        <a href="https://x.com/SakuraFalling1" title="Twitter" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </a>
        <a className={`${styles["wechat"]}`} title="Wechat" target="_blank">
          <FontAwesomeIcon icon={faWeixin} size="xl" />
          <img src="/Wechat-QR.png" alt="Wechat QRCode" />
        </a>
        <a className={`${styles["qq"]}`} title="QQ" target="_blank">
          <FontAwesomeIcon icon={faQq} size="xl" />
          <img src="/QQ-QR.png" alt="QQ QRCode" />
        </a>
      </div>
    </div>
  );
}
export default SocialLinks;
