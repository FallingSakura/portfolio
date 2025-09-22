import styles from "@/styles/SideNav.module.css";
import appStyles from "@/styles/App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../data/links";
import { useRef, useEffect } from "react";
import { usePageObserver } from "../hooks/usePageObserver";
import { useCurrentPageStore } from "../store/useCurrentPageStore";
import { useToggleStore } from "../store/useToggleStore";
const SideNav = ({
  containerRef,
  isNavOpen,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  isNavOpen: boolean;
}) => {
  const timeRef = useRef<NodeJS.Timeout | null>(null);
  const currentPage = useCurrentPageStore((state) => state.currentPage);
  const setCurrentPage = useCurrentPageStore((state) => state.setCurrentPage);
  const toggle = useToggleStore((state) => state.toggle);

  /* scrollFreeze to freeze the observer */
  const scrollFreeze = useRef(false);
  usePageObserver(containerRef, setCurrentPage, scrollFreeze);
  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, []);
  function scroll(index: number) {
    const pageContainer = document.querySelector(
      `.${appStyles["page-container"]}`,
    ) as HTMLElement;
    const scrollHeight = window.innerHeight * index;
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    setCurrentPage(index);
    scrollFreeze.current = true;
    // freeze observer 0.5s
    timeRef.current = setTimeout(() => {
      scrollFreeze.current = false;
    }, 500);
    pageContainer?.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <>
      <nav
        className={`${styles["side-nav"]} ${isNavOpen ? styles["nav-open"] : ""}`}
      >
        <div className={`${styles["nav-container"]}`}>
          <ul>
            {links.map((link, index) => (
              <li
                key={link.id}
                style={{
                  transitionDelay: `${index * 0.05}s`,
                }}
                onClick={() => scroll(index)}
              >
                <div className={`${styles["item"]}`}>
                  {link.icon && <FontAwesomeIcon icon={link.icon} size="sm" />}
                  <span>{link.title}</span>
                </div>
              </li>
            ))}
          </ul>
          <div
            className={`${styles["backdrop"]}`}
            style={{
              transform: `translate(-50%, ${currentPage * 100}%)`,
            }}
          ></div>
        </div>
      </nav>

      <nav className={`${styles["mobile-nav"]}`}>
        <ul>
          {links.map((link, index) => (
            <li
              className={`${currentPage === index ? styles["active"] : ""}`}
              key={link.id}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <a href={`#${link.id}`} onClick={toggle}>
                <span>{link.title}</span>
              </a>
              <div className={`${styles["icon-container"]}`}>
                {link.icon && <FontAwesomeIcon icon={link.icon} size="lg" />}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
