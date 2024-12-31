import avatar from '/avatar.jpg'
import './App.css'
import { useState } from 'react'
import ToggleButton from './components/ToggleButton'
import SocialLinks from './components/SocialLinks'

function App() {
  const [togglNav, setTogglNav] = useState(false)
  const toggle = () => {
    setTogglNav(!togglNav)
  }
  return (
    <>
      <ToggleButton togglNav={togglNav} toggle={toggle} />
      <div className="home flex">
        <div className="container">
          <div className="about flex">
            <div className="img-container">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="title flex">
              <h1>
                <span>Hi, I'm </span><span id="name">FallingSakura</span>
              </h1>
            </div>
          </div>
          <SocialLinks />
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
