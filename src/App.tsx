import styles from "./styles/App.module.css";
import { useRef, useCallback, useEffect } from "react";
import NavButtonToggle from "./components/toggle/NavButtonToggle";
import ThemeToggle from "./components/toggle/ThemeToggle";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/project/ProjectPage";
import Essay from "./components/Essay";
import SideNav from "./components/SideNav";
import FriendPage from "./components/friend/FriendPage";
import Background from "./components/Background";
import Deving from "./components/Deving";
import { useToggleStore } from "./store/useToggleStore";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const togglNav = useToggleStore((state) => state.togglNav);
  const toggle = useToggleStore((state) => state.toggle);

  const handleDocumentHeight = useCallback(() => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  }, []);

  // ESC key handler to close navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && togglNav) {
        toggle();
      }
    },
    [togglNav, toggle],
  );

  useEffect(() => {
    window.addEventListener("resize", handleDocumentHeight);
    handleDocumentHeight();
    return () => {
      window.removeEventListener("resize", handleDocumentHeight);
    };
  }, [handleDocumentHeight]);

  // Add ESC key listener when navigation is open
  useEffect(() => {
    if (togglNav) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [togglNav, handleKeyDown]);
  return (
    <div className={`${styles["background"]} ${togglNav ? "nav-open" : ""}`}>
      <NavButtonToggle />
      <ThemeToggle />
      <Background />
      <section ref={containerRef} className={`${styles["page-container"]}`}>
        <HomePage />
        <Essay />
        <ProjectPage />
        <FriendPage />
      </section>
      <SideNav containerRef={containerRef} />
      <Deving />
    </div>
  );
}

export default App;
