import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
} from "../../portfolio";
import profileImageLow from '../../assets/images/profile.jpg';

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewSkills = skillsSection.display;

  
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <div class="logo-container">
          <a href="/"><img src={profileImageLow} alt="Profile" className="profile-img" /></a>
            <a href="/" className="logo">
              <span className="grey-color">&lt;</span>
              <span className="logo-name">{greeting.username}</span>
              <span className="grey-color">/&gt;</span>
            </a>
        </div>
        
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
        {viewSkills && (
            <li>
              <a href="#">🇪🇸 ES</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Habilidades</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#projects">Proyectos</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#education">Educación</a>
            </li>
          )}
    
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
