import '@/styles/side-nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from '../data/links'
import { useRef, useEffect, useState } from 'react'
import { useIsMobileStore } from '../store/useIsMobileStore'
import { usePageObserver } from '../hooks/usePageObserver'
import { useToggleStore } from '../store/useToggleStore'
const SideNav = ({
  containerRef
}: {
  containerRef: React.RefObject<HTMLDivElement>
}) => {
  const timeRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useIsMobileStore((state) => state.isMobile)
  const [currentPage, setCurrentPage] = useState(0)
  const toggle = useToggleStore((state) => state.toggle)

  /* scrollFreeze to freeze the observer */
  const scrollFreeze = useRef(false)
  usePageObserver(containerRef, setCurrentPage, scrollFreeze)
  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current)
      }
    }
  }, [])
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
    // freeze observer 0.5s
    timeRef.current = setTimeout(() => {
      scrollFreeze.current = false
    }, 500)
    pageContainer?.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    })
  }
  return (
    <>
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

      {isMobile && (
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
      )}
    </>
  )
}

export default SideNav
