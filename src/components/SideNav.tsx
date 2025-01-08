import '../styles/SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from '../data/links'
function SideNav({ currentPage }: { currentPage: number }) {
  return (
    <nav className="side-nav">
      <div className="nav-container">
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
            transform: `translate(-50%, ${currentPage * 100}%)`
          }}
        ></div>
      </div>
    </nav>
  )
}

export default SideNav
