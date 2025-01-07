import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import '../styles/ToggleTheme.css'
function ToggleTheme({
  theme,
  toggleTheme
}: {
  theme: boolean
  toggleTheme: () => void
}) {
  const isMobileView = window.innerWidth <= 768
  return (
    <div
      className="toggle-theme"
      onClick={toggleTheme}
      style={{
        left: `${isMobileView ? 'unset' : '0'}`,
        right: `${isMobileView ? '0' : 'unset'}`,
        top: `${isMobileView ? '0' : 'unset'}`,
        bottom: `${isMobileView ? 'unset' : '0'}`
      }}
    >
      <FontAwesomeIcon
        className={`icon ${theme ? 'visible' : 'hidden'}`}
        icon={faSun}
        size="lg"
      />
      <FontAwesomeIcon
        className={`icon ${theme ? 'hidden' : 'visible'}`}
        icon={faMoon}
        size="lg"
      />
    </div>
  )
}

export default ToggleTheme
