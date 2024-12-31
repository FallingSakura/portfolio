import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import '../styles/ToggleTheme.css'
function ToggleTheme({ theme, toggleTheme } : {
  theme: boolean,
  toggleTheme: () => void
}) {
  return (
    <div className="toggle-theme" onClick={toggleTheme}>
      <FontAwesomeIcon icon={theme ? faSun : faMoon} size="lg" />
    </div>
  )
}

export default ToggleTheme
