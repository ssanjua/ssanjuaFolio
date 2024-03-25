import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          {skillsSection.title}
        </h1>
        <div className="skills-card-container">
          {skillsSection.categories.map((category, index) => (
            <SoftwareSkill key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};