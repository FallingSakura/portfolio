import avatar from '/avatar.jpg'
import './App.css'
import { useState, useEffect } from 'react'
import ToggleButton from './components/ToggleButton'
import SocialLinks from './components/SocialLinks'
import ToggleTheme from './components/ToggleTheme'

function App() {
  const [togglNav, setTogglNav] = useState(false)
  const [theme, setTheme] = useState(false)
  const toggle = () => {
    setTogglNav(!togglNav)
  }
  const toggleTheme = () => {
    setTheme(!theme)
  }
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

    if (prefersDarkScheme.matches) {
      setTheme(true)
    } else {
      setTheme(false)
    }

    prefersDarkScheme.addEventListener('change', (e) => {
      if (e.matches) {
        setTheme(true)
      } else {
        setTheme(false)
      }
    })
  }, [])
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [theme])
  return (
    <>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      <ToggleButton togglNav={togglNav} toggle={toggle} />
      <div className="home flex">
        <div className="container">
          <div className="about flex">
            <div className="img-container">
              <div className="img">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className="title flex">
              <h1>
                <span>Hi, I'm </span>
                <span id="name">FallingSakura</span>
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
