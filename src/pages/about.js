import React from "react";
import "./about.css";
import me9 from "../Images/me9.JPG";
import TypingAnimation from "./typing";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>Hello, I'm Khushi</h1>
          <h2 className="typing-animation">
            <TypingAnimation />

          </h2>
          <p>
          With a graduate degree in computer science from Cornell University and the University of Maryland, 
          College Park, specializing in Machine Learning Engineering, Natural Language Processing, and Interactive
          Device Design, my goal is to harness the creative power of art to push the boundaries of technology. 
          I’m passionate about integrating emerging technologies like machine learning, wearables, and AR/VR to impactful and innovative experiences. 
          Let’s build a future where technology is not just a tool, but a catalyst for artistic expression, societal progress, and meaningful connections.
          </p>
          <p className="cta">Let's build with intention together!</p>
        </div>
        <div className="about-image">
          <img src={me9} alt="Khushi Bhansali"/>
        </div>
      </div>
    </section>
  );
};

export default About;