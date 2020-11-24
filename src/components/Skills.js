import React from "react";
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';
import PDF from './PDF/AmandaAnderson.pdf';

function Skills() {
  return (
    <Wrapper>
      <div className="resumeWrapper">
        <Link to={PDF} className="Resume" target="_blank">VIEW MY RESUME</Link>
      </div>
      {/* 
      <div className="resumeWrapper">
          <a
            type="submit"
            className="Resume"
            href="./PDF/AmandaAnderson.pdf" 
            rel="noopener noreferrer" 
            target="_blank"
            >
            VIEW MY RESUME
            </a>
      </div> */}
    </Wrapper >
  );
}

export default Skills