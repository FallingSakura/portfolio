import '../styles/SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
function SideNav({
  currentPage,
  togglNav
}: {
  currentPage: number
  togglNav: boolean
}) {
  const links = [
    {
      id: 'home',
      title: 'Home',
      icon: faHouse
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: faLaptopCode
    }
  ]
  return (
    <nav className="side-nav">
      <ul>
        {links.map((link, index) => (
          <li
            key={link.id}
            style={{
              transitionDelay: `${index * 0.05}s`
            }}
          >
            <a href={`#${link.id}`}>
              {link.icon && <FontAwesomeIcon icon={link.icon} size="sm" />}
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div
        className="backdrop"
        style={{
          transform: `translate(${togglNav ? '-50%' : '-200px'}, ${
            currentPage * 100
          }%)`,
          transitionDelay: `${currentPage * 0.05}s`
        }}
      ></div>
    </nav>
  )
}

export default SideNav
