import '../styles/side-nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from '../data/links'
import { useRef } from 'react'
function SideNav({
  currentPage,
  setCurrentPage,
  scrollFreeze
}: {
  currentPage: number
  setCurrentPage: Function
  scrollFreeze: React.MutableRefObject<boolean>
}) {
  const timeRef = useRef<NodeJS.Timeout | null>(null)
  function scroll(index: number) {
    const pageContainer = document.querySelector(
      '.page-container'
    ) as HTMLElement
    const scrollHeight = window.innerHeight * index
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
    setCurrentPage(index)
    scrollFreeze.current = true
    timeRef.current = setTimeout(() => {
      scrollFreeze.current = false
    }, 500)
    pageContainer?.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    })
  }
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
              onClick={() => scroll(index)}
            >
              <div className="item">
                {link.icon && <FontAwesomeIcon icon={link.icon} size="sm" />}
                <span>{link.title}</span>
              </div>
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
