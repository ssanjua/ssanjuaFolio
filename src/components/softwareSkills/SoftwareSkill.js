import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill({ category }) {
  return (
    <div className="skill-card"> {/* Utilizamos la misma clase que en las tarjetas de educación */}
      <div className="software-skills-category">
        <h3 className="skills-subtitle">{category.subTitle}</h3>
        <div className="skills-line"></div> 
          <ul className="dev-icons">
            {category.softwareSkills.map((skill, i) => (
              <li key={i} className="software-skill-inline" name={skill.skillName}>
                <i className={skill.fontAwesomeClassname}></i>
                <p>{skill.skillName}</p>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};