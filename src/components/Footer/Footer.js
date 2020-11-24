import React from "react";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="icons">

        <a href="https://github.com/aanderson120" rel="noopener noreferrer" target="_blank">
          <img src={github} className="icon-github" alt="Github Icon" /></a>

        <a href="https://www.linkedin.com/in/amanda-anderson-66829334/" rel="noopener noreferrer" target="_blank">
          <img src={linkedin} className="icon-linkedin" alt="LinkedinIcon" /></a>

          <a href="mailto:aanderson120@yahoo.com" rel="noopener noreferrer" target="_blank">
          <img src={email} className="icon-mail" alt="EmailIcon" /></a>

      </div>
    </footer>
  );
}

export default Footer