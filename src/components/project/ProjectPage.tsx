import styles from "@/styles/project/ProjectPage.module.css";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { useCurrentPageStore } from "../../store/useCurrentPageStore";
import { useIsMobileStore } from "../../store/useIsMobileStore";

let container_width = 0;
let init = 0;
const ProjectPage = React.memo(() => {
  const [pos, setPos] = useState(0);
  const project_ref = useRef<HTMLDivElement>(null);
  const card_container = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobileStore((state) => state.isMobile);
  const currentPage = useCurrentPageStore((state) => state.currentPage);
  useEffect(() => {
    console.log("currentPage", currentPage);
    if (!isMobile && project_ref.current) {
      if (currentPage === 2) {
        project_ref.current.classList.add(styles["active"]);
      } else {
        project_ref.current.classList.remove(styles["active"]);
      }
    }
  }, [currentPage, isMobile]);

  useEffect(() => {
    if (!isMobile && card_container.current) {
      container_width = card_container.current.offsetWidth;
      init = container_width / 2 - 200;
      setPos(init);
    }
  }, [isMobile]);
  function scrollForward() {
    if (pos === init - (projects.length - 1) * 375) {
      return;
    }
    setPos(pos - 375);
  }
  function scrollBack() {
    if (pos === init) {
      return;
    }
    setPos(pos + 375);
  }
  return (
    <div className={`${styles["project"]}`} ref={project_ref} id="projects">
      <div
        className={`${styles["card-container"]}`}
        ref={card_container}
        style={{
          transform: `translateX(${isMobile ? 0 : pos}px)`,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className={`${styles["controller"]}`}>
        <span
          title="Back"
          className={`${styles["left-btn"]}`}
          onClick={scrollBack}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <span
          title="Forward"
          className={`${styles["right-btn"]}`}
          onClick={scrollForward}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>
    </div>
  );
});
export default ProjectPage;
