import '../styles/project-page.css'
import { projects } from '../data/projects'
import ProjectCard from './project-card/ProjectCard'
function ProjectPage() {
  return (
    <div className="project" id="projects">
      <div className="card-container">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </div>
  )
}
export default ProjectPage
