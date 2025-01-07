import './App.css'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from './hooks/useTheme'
import { usePageObserver } from './hooks/usePageObserver'
import MobileNav from './components/MobileNav'
import ToggleButton from './components/ToggleButton'
import ToggleTheme from './components/ToggleTheme'
import HomePage from './components/HomePage'
import SecPage from './components/SecPage'
import SideNav from './components/SideNav'

function App() {
  const [togglNav, setTogglNav] = useState(false)
  const [theme, setTheme] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const toggle = () => {
    setTogglNav(!togglNav)
  }
  const toggleTheme = () => {
    const newTheme = !theme
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }
  useTheme(setTheme)
  usePageObserver(containerRef, setCurrentPage)
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
        <section ref={containerRef} className="page-container">
          <HomePage />
          <SecPage />
        </section>
        <SideNav currentPage={currentPage} togglNav={togglNav} />
        <MobileNav toggle={toggle} />
      </div>
    </>
  )
}

export default App
