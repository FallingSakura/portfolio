import avatar from '/avatar.jpg'
import SocialLinks from './SocialLinks'
import '../styles/HomePage.css'
function HomePage() {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="about">
          <div className="img-container">
            <div className="img">
              <img src={avatar} alt="avatar" />
            </div>
          </div>
          <div className="title">
            <h1>
              <span>Hi, I'm </span>
              <span id="name">FallingSakura</span>
            </h1>
          </div>
        </div>
        <SocialLinks />
      </div>
    </div>
  )
}

export default HomePage
