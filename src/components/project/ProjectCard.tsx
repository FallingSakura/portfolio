import styles from "@/styles/project/ProjectCard.module.css";
import { Project } from "../../types/project";
import LanguageLabel from "./LanguageLabel";
import React from "react";
const ProjectCard = React.memo(
  ({ title, descr, url, languages, img }: Project) => {
    return (
      <div className={`${styles["project-card"]} card`}>
        {img && (
          <div
            className={`${styles["showcase"]}`}
            style={{
              backgroundImage: `url('${img}')`,
            }}
          ></div>
        )}
        <a href={url} target="_blank" tabIndex={-1}>
          <div className={`${styles["project-container"]}`}>
            <div className={`${styles["title"]}`}>
              <h3>{title}</h3>
            </div>
            <div className={`${styles["descr"]}`}>
              <p>{descr}</p>
            </div>
            <div className={`${styles["footer"]}`}>
              {languages.map((language) => (
                <LanguageLabel language={language} key={language} />
              ))}
            </div>
          </div>
        </a>
      </div>
    );
  },
);

export default ProjectCard;
