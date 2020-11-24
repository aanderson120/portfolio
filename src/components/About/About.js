import React from "react";
import headshot from "./images/photo.png";
import './About.css'

function About() {
    return (
        <div className="App">
            <div className="App-header">
                <span className="about-container">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={headshot} className="Amanda-Image" alt="headshot" />
                        </div>

                        <div className="col-sm-9">
                            <div className="about-container-text">
                                <h2 id="about-header">Hello!</h2>
                                <p id="about-text">
                                    about me...</p>

                                <p id="about-text">
                                    about me...</p>

                                <p id="about-text">
                                    about me...</p>

                                <p id="about-text">
                                    about me...
                </p>
                            </div>
                        </div>

                    </div>
                </span>
            </div>
        </div>
    );
}

export default About