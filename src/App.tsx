import './App.css'
import { useState, useEffect } from 'react'
import ToggleButton from './components/ToggleButton'
import ToggleTheme from './components/ToggleTheme'
import HomePage from './components/HomePage'
import SecPage from './components/SecPage'

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
      /* true-dark false-light */
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
      /* documentElement = <html><html/> */
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [theme])
  return (
    <>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      <ToggleButton togglNav={togglNav} toggle={toggle} />
      <div className="page-container">
        <HomePage />
        <SecPage />
      </div>
    </>
  )
}

export default App
