import React from "react";
import "./about.css";
import me9 from "../Images/me9.JPG";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>Hello, I'm Khushi</h1>
          <h2>A SOFTWARE/ML ENGINEER BY TRADE, A CREATIVE TECHNOLOGIST BY PASSION </h2>
          <p>
          With a graduate degree in computer science from Cornell University and the University of Maryland, College Park, specializing in Machine Learning Engineering, Deep Generative Modeling, Natural Language Processing, and Interactive Device Design, my goal is to harness the creative power of art to push the boundaries of technology. My hands-on experience at the US FDA, Goldman Sachs, and Johns Hopkins Applied Physics Laboratory has deepened my understanding of both technical and creative domains, reinforcing my belief that the fusion of art and technology can drive advancements that improve society, foster deeper community connections, and inspire unparalleled collaborations.

          I’m passionate about integrating emerging technologies like machine learning, wearables, and AR/VR to create experiences that are as impactful as they are innovative. I strive to design solutions that not only meet functional needs but also resonate on a human level, bringing people together through shared creative visions.

          Let’s build a future where technology is not just a tool, but a catalyst for artistic expression, societal progress, and meaningful connections.
          </p>
          <p className="cta">Let's build with intention together!</p>
        </div>
        <div className="about-image">
          <img src={me9} alt="Khushi Bhansali" />
        </div>
      </div>
    </section>
  );
};

export default About;