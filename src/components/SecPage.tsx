import '../styles/SecPage.css'
import { projects } from '../data/projects'
function SecPage() {
  return (
    <div className="sec" id="projects">
      <div className="card-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.descr}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SecPage
