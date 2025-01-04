import '../styles/SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPenNib, faStar, faCloud } from '@fortawesome/free-solid-svg-icons'
function SideNav() {
  const links = [
    {
      id: 'home',
      title: 'Home',
      icon: faHouse
    },
    {
      id: 'sec',
      title: 'Sec',
      icon: faPenNib
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
