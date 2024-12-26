import avatar from '/avatar.jpg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBilibili,
  faTwitter,
  faGithub,
  faWeixin,
  faQq,
} from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <>
      <div className="home flex">
        <div className="container">
          <div className="about flex">
            <div className="img-container">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="title flex">
              <h1>
                Hi, I'm <span className="name">FallingSakura</span>.
              </h1>
            </div>
          </div>
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
              <FontAwesomeIcon icon={faWeixin} size="xl" />
              <FontAwesomeIcon icon={faQq} size="xl" />
            </div>
          </div>
        </div>
        {/* <div className="test">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div> */}
      </div>
    </>
  )
}

export default App
