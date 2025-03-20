import './styles/App.css'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import { usePageObserver } from './hooks/usePageObserver'
import MobileNav from './components/MobileNav'
import ToggleButton from './components/toggle/ToggleButton'
import ToggleTheme from './components/toggle/ToggleTheme'
import HomePage from './components/HomePage'
import ProjectPage from './components/ProjectPage'
import SideNav from './components/SideNav'
import FriendPage from './components/FriendPage'
import Background from './components/Background'

function App() {
  const containerRef = useRef<HTMLElement>(null)
  const [togglNav, setTogglNav] = useState(false)
  const [theme, setTheme] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  /* scrollFreeze to freeze the observer */
  const scrollFreeze = useRef(false)
  usePageObserver(containerRef, setCurrentPage, scrollFreeze)

  // toggle the nav
  const toggle = useCallback(() => {
    setTogglNav(!togglNav)
  }, [togglNav])

  // toggle the theme
  const toggleTheme = useCallback(() => {
    const newTheme = !theme
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }, [theme])
  useTheme(setTheme)
  useEffect(() => {
    if (theme) {
      /* documentElement = <html><html/> */
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [theme])
  return (
    <>
      <div className={`background ${togglNav ? 'nav-open' : ''}`}>
        <ToggleButton togglNav={togglNav} toggle={toggle} />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <Background />
        <section ref={containerRef} className="page-container">
          <HomePage />
          <ProjectPage />
          <FriendPage />
        </section>
        <SideNav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          scrollFreeze={scrollFreeze}
        />
        <MobileNav currentPage={currentPage} toggle={toggle} />
      </div>
    </>
  )
}

export default App
