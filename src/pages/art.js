import React, { useEffect, useRef } from "react";
import "./art.css";
import paint1 from "../Images/pic2.png";
import paint2 from "../Images/pic3.png";
import paint3 from "../Images/p4.png";
import paint4 from "../Images/p5.png";
import paint5 from "../Images/p6.png";
import paint6 from "../Images/p7.png";
import paint7 from "../Images/p8.png";
import paint8 from "../Images/p9.png";
import paint9 from "../Images/p10.png";
import paint10 from "../Images/p11.png";
import paint11 from "../Images/p12.png";
import paint12 from "../Images/pic1.png";

const Work = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const paintings = gallery.querySelectorAll('.painting');
    const totalPaintings = paintings.length;
    const spotlight = document.querySelector('.spotlight');
    
    paintings.forEach((painting, index) => {
      const angle = (index / totalPaintings) * Math.PI * 2;
      const radius = 400;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      painting.style.transform = `translateX(${x}px) translateZ(${z}px)`;
    });
  
    let currentAngle = 0;
    const handleMouseMove = (e) => {
      const sensitivity = 0.1;
      currentAngle += e.movementX * sensitivity;
      gallery.style.transform = `rotateY(${currentAngle}deg)`;
  
      // Update spotlight position
      const rect = gallery.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`;
    };
  
    document.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="gallery-wrapper">
      <div className="spotlight"></div>
      <section className="gallery">
        <div ref={galleryRef} className="gallery-container">
          {[paint1, paint2, paint3, paint4, paint5, paint6, paint7, paint8, paint9, paint10, paint11, paint12].map((painting, index) => (
            <div key={index} className="painting">
              <img src={painting} alt={`Painting ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <div className="floor"></div>
    </div>
  );
};

export default Work;