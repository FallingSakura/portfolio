import './styles/App.css'
import { useState, useRef, useCallback } from 'react'
import ToggleButton from './components/toggle/ToggleButton'
import ToggleTheme from './components/toggle/ToggleTheme'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'
import SideNav from './components/SideNav'
import FriendPage from './components/FriendPage'
import Background from './components/Background'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [togglNav, setTogglNav] = useState(false)
  const toggle = useCallback(() => {
    setTogglNav(!togglNav)
  }, [togglNav])
  return (
    <>
      <div className={`background ${togglNav ? 'nav-open' : ''}`}>
        <ToggleButton togglNav={togglNav} toggle={toggle} />
        <ToggleTheme />
        <Background />
        <section ref={containerRef} className="page-container">
          <HomePage />
          <ProjectPage />
          <FriendPage />
        </section>
        <SideNav containerRef={containerRef} />
      </div>
    </>
  )
}

export default App
