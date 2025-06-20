import './styles/App.css'
import { useRef, useCallback, useEffect } from 'react'
import ToggleButton from './components/toggle/ToggleButton'
import ToggleTheme from './components/toggle/ToggleTheme'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'
import Essay from './components/Essay'
import SideNav from './components/SideNav'
import FriendPage from './components/friend/FriendPage'
import Background from './components/Background'
import { useToggleStore } from './store/useToggleStore'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const togglNav = useToggleStore((state) => state.togglNav)
  const handleDocumentHeight = useCallback(() => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  }, [])
  useEffect(() => {
    window.addEventListener('resize', handleDocumentHeight)
    handleDocumentHeight()
    return () => {
      window.removeEventListener('resize', handleDocumentHeight)
    }
  }, [handleDocumentHeight])
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
