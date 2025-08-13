import { languages } from "../../data/languages";
import "@/styles/project-card.css";

function LanguageLabel({ language }: { language: string }) {
  return (
    <div className="language-label">
      <span
        className="label"
        style={{ backgroundColor: `#${languages[language] || "000"}` }}
      ></span>
      <span className="text">{language}</span>
    </div>
  );
}
export default LanguageLabel;
