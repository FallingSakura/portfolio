import './styles/App.css'
import { useRef } from 'react'
import ToggleButton from './components/toggle/ToggleButton'
import ToggleTheme from './components/toggle/ToggleTheme'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'
import Essay from './components/Essay'
import SideNav from './components/SideNav'
import FriendPage from './components/FriendPage'
import Background from './components/Background'
import { useToggleStore } from './store/useToggleStore'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const togglNav = useToggleStore((state) => state.togglNav)
  return (
    <div className={`background ${togglNav ? 'nav-open' : ''}`}>
      <ToggleButton />
      <ToggleTheme />
      <Background />
      <section ref={containerRef} className="page-container">
        <HomePage />
        <ProjectPage />
        <Essay />
        <FriendPage />
      </section>
      <SideNav containerRef={containerRef} />
    </div>
  )
}

export default App
