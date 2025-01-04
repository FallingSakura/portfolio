import './App.css'
import { useState, useEffect } from 'react'
import ToggleButton from './components/ToggleButton'
import ToggleTheme from './components/ToggleTheme'
import HomePage from './components/HomePage'
import SecPage from './components/SecPage'
import SideNav from './components/SideNav'

function App() {
  const [togglNav, setTogglNav] = useState(false)
  const [theme, setTheme] = useState(false)
  const toggle = () => {
    setTogglNav(!togglNav)
  }
  const toggleTheme = () => {
    const newTheme = !theme
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme === 'dark')
    } else {
      if (prefersDarkScheme.matches) {
        setTheme(true)
        /* true-dark false-light */
      } else {
        setTheme(false)
      }
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
        <div className="page-container">
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
          <HomePage />
          <SecPage />
        </div>
        <SideNav />
      </div>
    </>
  )
}

export default App
