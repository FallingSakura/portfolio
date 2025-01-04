import '../styles/SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar, faCloud, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
function SideNav() {
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
    },
    {
      id: 'third',
      title: 'Third',
      icon: faStar
    },
    {
      id: 'fourth',
      title: 'Fourth',
      icon: faCloud
    }
  ]
  return (
    <nav className="side-nav">
      <ul>
        {links.map((link, index) => (
          <li key={link.id}>
            <a href={`#${link.id}`} style={{
              transitionDelay: `${index * 0.05}s`
            }}>
              {link.icon && <FontAwesomeIcon icon={link.icon} size="sm" />}
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNav
