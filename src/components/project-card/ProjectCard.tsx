import '@/styles/project-card.css'
import { Project } from '../../types/project'
import LanguageLabel from './LanguageLabel'
function ProjectCard({ title, descr, languages }: Project) {
  return (
    <div className="project-card">
      <div className="content-container">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="descr">
          <p>{descr}</p>
        </div>
        <div className="footer">
          {languages.map((language) => (
            <LanguageLabel language={language} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
