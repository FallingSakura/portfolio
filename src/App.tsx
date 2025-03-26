import './styles/App.css'
import { useRef } from 'react'
import ToggleButton from './components/toggle/ToggleButton'
import ToggleTheme from './components/toggle/ToggleTheme'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'
import SideNav from './components/SideNav'
import FriendPage from './components/FriendPage'
import Background from './components/Background'
import { useToggle } from './hooks/useToggle'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [togglNav, toggle] = useToggle(false)
  return (
    <div className={`background ${togglNav ? 'nav-open' : ''}`}>
      <ToggleButton togglNav={togglNav} toggle={toggle} />
      <ToggleTheme />
      <Background />
      <section ref={containerRef} className="page-container">
        <HomePage />
        <ProjectPage />
        <FriendPage />
      </section>
      <SideNav containerRef={containerRef} toggle={toggle} />
    </div>
  )
}

export default App
