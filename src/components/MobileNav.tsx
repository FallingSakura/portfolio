import '@/styles/mobile-nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from '../data/links'
import React from 'react'
const MobileNav = React.memo(
  ({ toggle, currentPage }: { toggle: () => void; currentPage: number }) => {
    console.log('MobileNav')
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
                <span>{link.title}</span>
              </a>
              <div className="icon-container">
                {link.icon && <FontAwesomeIcon icon={link.icon} size="lg" />}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
)
export default MobileNav
