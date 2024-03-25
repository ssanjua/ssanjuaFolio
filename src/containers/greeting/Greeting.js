import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import profileImage from '../../assets/images/profile.jpg';
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h2
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                
              </h2>
              <h1 className={isDark ? "dark-mode greeting-name" : "greeting-name"}>
              {" "}
                {greeting.name}{" "}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="CONTACTO" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="DESCARGAR CV"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
              <img
                alt="ssanjua profile picture"
                src={profileImage}
              ></img>
          
          </div>
        </div>
      </div>
    </Fade>
  );
}
