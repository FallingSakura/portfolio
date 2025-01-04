import '../styles/SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
function SideNav({ currentPage}: { currentPage: number}) {
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
        <div className="backdrop" style={{
          transform: `translateY(${currentPage * 100}%)`,
        }}></div>
      </ul>
    </nav>
  )
}

export default SideNav
