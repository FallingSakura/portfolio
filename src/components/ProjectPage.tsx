import '../styles/project-page.css'
import { projects } from '../data/projects'
import ProjectCard from './project-card/ProjectCard'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
function ProjectPage() {
  return (
    <div className="project" id="projects">
      <div className="card-container">
        {/* <span className="left-btn">
          <FontAwesomeIcon icon={faAngleLeft} />
        </span> */}
        {projects.map((project, index) => (
          <div className="card" style={{
            transform: `translateY(${(index & 1) ? "100px" : "-100px"})`
          }}>
            <ProjectCard {...project} key={project.title} />
          </div>
        ))}
        {/* <span className="right-btn">
          <FontAwesomeIcon icon={faAngleRight} />
        </span> */}
      </div>
    </div>
  )
}
export default ProjectPage
