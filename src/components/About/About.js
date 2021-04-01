import React from "react";
import headshot from "./images/photo.png";
import './About.css'

function About() {
    return (
        <div className="App">
            <div className="App-header">
                <span className="about-container">
                    <div className="row">
                        <div className="col-sm-3 col-lg-6">
                            <img src={headshot} className="Amanda-Image" alt="headshot" />
                        </div>

                        <div className="col-sm-9 col-lg-6">
                            <div className="about-container-text">
                                <h2 id="about-header">About Me</h2>
                                <p id="about-text">
                                I am a full stack web developer living in Minnesota. I have an Associates Degree in Interior Design and in December of 2020 completed a full stack bootcamp through the University of Minnesota. My goal is to combine the two to create a unique experience for the user.</p>

                                <p id="about-text">
                                I have a background in retail management, with a little more than 15 years experience. Which has given me the ability to develop strong communication skills and a drive to succeed in a team enviornment.</p>

                                <p id="about-text">
                                In my spare time I like to play video games and play around in different techonologies. I recently decided to pursue my hobbies a bit deeper and learn a new skill in a field I am passionate about.</p>

                            </div>
                        </div>

                    </div>
                </span>
            </div>
        </div>
    );
}

export default About