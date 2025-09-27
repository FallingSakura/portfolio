import { languages } from "../../data/languages";
import styles from "@/styles/components/project/ProjectCard.module.css";

function LanguageLabel({ language }: { language: string }) {
  return (
    <div className={`${styles["language-label"]}`}>
      <span
        className={`${styles["label"]}`}
        style={{ backgroundColor: `#${languages[language] || "000"}` }}
      ></span>
      <span className={`${styles["text"]}`}>{language}</span>
    </div>
  );
}
export default LanguageLabel;
