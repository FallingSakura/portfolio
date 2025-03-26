import '@/styles/project-card.css'
import { Project } from '../../types/project'
import LanguageLabel from './LanguageLabel'
import React from 'react'
const ProjectCard = React.memo(
  ({ title, descr, url, languages, img }: Project) => {
    return (
      <div className="project-card">
        {img && (
          <div
            className="showcase"
            style={{
              backgroundImage: `url('${img}')`
            }}
          ></div>
        )}
        <a href={url} target="_blank" tabIndex={-1}>
          <div className="project-container">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="descr">
              <p>{descr}</p>
            </div>
            <div className="footer">
              {languages.map((language) => (
                <LanguageLabel language={language} key={language} />
              ))}
            </div>
          </div>
        </a>
      </div>
    )
  }
)

export default ProjectCard
