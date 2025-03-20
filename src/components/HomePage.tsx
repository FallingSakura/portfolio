import avatar from '/avatar.jpg'
import SocialLinks from './SocialLinks'
import React from 'react'
import '../styles/home-page.css'
import ScrollToBottom from './ScrollToBottom'
const HomePage = React.memo(() => {
  console.log('HOME')
  return (
    <div className="home" id="home">
      <div className="home-container">
        <div className="about">
          <div className="img-container">
            <div className="img">
              <a href="/">
                <img src={avatar} alt="avatar" />
              </a>
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
      <ScrollToBottom />
    </div>
  )
})

export default HomePage
