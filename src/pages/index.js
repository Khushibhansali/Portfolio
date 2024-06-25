import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="app-container">
      <Spline scene="https://prod.spline.design/xg4VIPfKWlfROozT/scene.splinecode" />

      <div className="about-container">
        <h1 className="main-title">Cornell Tech Makerspace</h1>
        <section className="about-section">
          <div className="section-content">
            <h2>Importance on a Graduate Campus</h2>
            <p>
              In a graduate campus like Cornell Tech, our makerspace plays a crucial role in bridging the gap between theoretical knowledge and practical application. It provides a platform for students to experiment, prototype, and turn their ideas into reality, which is essential for their academic and professional growth.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>Mission</h2>
            <p>
              Our mission is to empower students to innovate and create by providing them with the resources, support, and community they need to succeed. We aim to foster a culture of collaboration, learning, and creativity that extends beyond the classroom.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>Vision</h2>
            <p>
              We envision a vibrant makerspace where students from diverse disciplines collaborate to solve real-world problems, driving technological advancements and fostering entrepreneurial spirit.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <h2>What We Offer</h2>
            <ul>
              <li>State-of-the-art equipment and tools for various projects.</li>
              <li>Workshops and coursework to enhance skills.</li>
              <li>Collaborative projects and networking opportunities with Weill Cornell, NYC Makerspaces, Roosevelt island local resident support, and outreach.</li>
              <li>Support from experienced mentors and industry experts.</li>
            </ul>
          </div>
        </section>

        <section className="project-slider full-width-section">
          <h2>Recent Projects</h2>
          <Slider {...sliderSettings}>
            <div>
              <img src="path_to_project_photo_1.jpg" alt="Project 1" />
              <p className="caption">Project 1 - Description</p>
            </div>
            <div>
              <img src="path_to_project_photo_2.jpg" alt="Project 2" />
              <p className="caption">Project 2 - Description</p>
            </div>
            <div>
              <img src="path_to_project_photo_3.jpg" alt="Project 3" />
              <p className="caption">Project 3 - Description</p>
            </div>
          </Slider>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
              What are the makerspace hours?
            </h3>
            {isOpen && (
              <p>The makerspace is open from 9 AM to 9 PM, Monday to Friday.</p>
            )}
          </div>
          <div className="faq-item">
            <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
              Who can use the makerspace?
            </h3>
            {isOpen && (
              <p>The makerspace is available to all Cornell Tech students, faculty, and staff.</p>
            )}
          </div>
          <div className="faq-item">
            <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
              What equipment is available?
            </h3>
            {isOpen && (
              <p>We offer 3D printers, laser cutters, CNC machines, and more.</p>
            )}
          </div>
          <div className="faq-item">
            <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
              How do I get trained on the equipment?
            </h3>
            {isOpen && (
              <p>We offer regular workshops and one-on-one training sessions.</p>
            )}
          </div>
          <div className="faq-item">
            <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
              Can I bring my own materials?
            </h3>
            {isOpen && (
              <p>Yes, you can bring your own materials or purchase them from us.</p>
            )}
          </div>
        </section>

        <section className="calendar-section">
          <h2>Upcoming Events</h2>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America/New_York"
            style={{ border: 0 }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </section>
      </div>

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
      
      <footer className="footer">
        <div className="footer-content full-width-section">
          <p>&copy; 2024 Cornell Tech Makerspace. All rights reserved.</p>
          <p>Contact us: <a href="mailto:info@cornelltechmakerspace.com">info@cornelltechmakerspace.com</a></p>
        </div>
      </footer>
    </div>
  );
}
