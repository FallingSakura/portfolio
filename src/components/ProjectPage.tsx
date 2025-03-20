import '../styles/project-page.css'
import { projects } from '../data/projects'
import ProjectCard from './project-card/ProjectCard'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react'

let container_width = 0
let init = 0
const ProjectPage = React.memo(() => {
  console.log('ProjectPage')
  const [pos, setPos] = useState(0)
  const card_container = useRef<HTMLDivElement>(null)
  const isMobile = window.innerWidth <= 768
  useEffect(() => {
    if (card_container.current) {
      container_width = card_container.current.offsetWidth
      init = container_width / 2 - 200
      setPos(init)
    }
  }, [])
  function scrollForward() {
    if (pos === init - (projects.length - 1) * 375) {
      return
    }
    setPos(pos - 375)
  }
  function scrollBack() {
    if (pos === init) {
      return
    }
    setPos(pos + 375)
  }
  return (
    <div className="project" id="projects">
      <div
        className="card-container"
        ref={card_container}
        style={{
          transform: `translateX(${isMobile ? 0 : pos}px)`
        }}
      >
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="controller">
        <span title="Back" className="left-btn" onClick={scrollBack}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <span title="Forward" className="right-btn" onClick={scrollForward}>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>
    </div>
  )
})
export default ProjectPage
