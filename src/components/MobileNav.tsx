import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
function MobileNav() {
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
    <nav className="mobile-nav">
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
export default MobileNav
