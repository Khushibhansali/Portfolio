import React from "react";
import "./about.css";

const About = () => {
    return (
        <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="path_to_niti_parikh_photo.jpg" alt="Professor Niti Parikh" />
            <div className="team-info">
              <h3>Professor Niti Parikh</h3>
              <p>
                Professor Niti Parikh has built everything from scratch, creating the makerspace and designing the new makerspace lab set to open in 2025. She is super passionate about creating things and has been the driving force behind our makerspace's success.
              </p>
              <a href="https://personalwebsite.com" target="_blank" rel="noopener noreferrer">Personal Website</a>
            </div>
          </div>
          <div className="team-member">
            <img src="path_to_sebastian_photo.jpg" alt="Sebastian" />
            <div className="team-info">
              <h3>Sebastian</h3>
              <p>
                Sebastian is an in-house artist who is actively involved in making things in the makerspace. His enthusiasm and creativity inspire other students to explore their potential and bring their ideas to life.
              </p>
              <a href="https://instagram.com/sebastian" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default About;
