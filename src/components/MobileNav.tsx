import '../styles/MobileNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
function MobileNav({
  toggle,
  currentPage
}: {
  toggle: () => void
  currentPage: number
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
    <nav className="mobile-nav">
      <ul>
        {links.map((link, index) => (
          <li
            className={`${currentPage === index ? 'active' : ''}`}
            key={link.id}
            style={{
              transitionDelay: `${index * 0.1}s`
            }}
          >
            <a href={`#${link.id}`} onClick={toggle}>
              {link.icon && <FontAwesomeIcon icon={link.icon} size="lg" />}
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default MobileNav
