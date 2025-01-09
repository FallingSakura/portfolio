import '../styles/sec-page.css'
import { projects } from '../data/projects'
import ProjectCard from './project-card/ProjectCard'
function SecPage() {
  return (
    <div className="sec" id="projects">
      <div className="card-container">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </div>
  )
}
export default SecPage
