import React, { useState } from 'react';
import './index.css';
import './coursework.css';
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const faqs = [
    { question: "What are the makerspace hours?", answer: "The makerspace is open from 8 AM to 8 PM, Monday to Friday." },
    { question: "Who can use the makerspace?", answer: "The makerspace is available to all Cornell Tech students, faculty, and communities upon request." },
    { question: "What equipment is available?", answer: "We offer 3D printers, laser cutters, CNC machines, and more." },
    { question: "How do I get trained on the equipment?", answer: "We offer workshops and specialized trainings on this website to teach you." },
    { question: "Can I bring my own materials?", answer: "Yes, you can bring your own materials or use the ones in the lab." },
  ];

  return (
    <div className="app-container">
      <header className="hero-section" style={{ backgroundColor: "#000" }}>
      <Spline scene="https://prod.spline.design/Ta10Ap4V0G-SPp63/scene.splinecode" />
        {/* <h1 className="hero-title">Cornell Tech Makerspace</h1> 
        <p className="hero-subtitle">Innovate. Create. Collaborate.</p> */}
      </header>

      <section className="section">
        <h2 className="section-title">What is a Makerspace</h2>
        <p className="section-content">
          A vibrant hub where students from diverse backgrounds converge to push the boundaries of innovation, our makerspace empowers them to design, create, and fabricate their ideas into reality. By providing access to cutting-edge tools, resources, and a supportive community, we nurture a culture of collaboration, learning, and entrepreneurial spirit. Within these walls, students from various disciplines come together to tackle real-world challenges, driving technological advancements and fostering the next generation of innovators and problem-solvers.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Importance on a Graduate Campus</h2>
        <p className="section-content">
          At Cornell Tech, our makerspace bridges the gap between theoretical knowledge and practical application. Providing a platform for students to experiment, prototype, and turn their ideas into reality, the makerspace fosters academic and professional growth.
        </p>
      </section>

      <section className="section">
  <h2 className="section-title">What We Offer</h2>
  <ul className="offer-list">
    <li>
      <FontAwesomeIcon icon={faCheckCircle} className="offer-icon" />
      State-of-the-art equipment and tools for various projects.
    </li>
    <li>
      <FontAwesomeIcon icon={faCheckCircle} className="offer-icon" />
      Workshops and coursework to enhance skills.
    </li>
    <li>
      <FontAwesomeIcon icon={faCheckCircle} className="offer-icon" />
      Collaborative opportunities with Weill Cornell, NYC Makerspaces, Roosevelt island local residents.
    </li>
    <li>
      <FontAwesomeIcon icon={faCheckCircle} className="offer-icon" />
      Support from experienced mentors and industry experts.
    </li>
  </ul>
</section>

      <section className="section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 onClick={() => toggleAccordion(index)} className={`faq-question ${isOpen === index ? 'open' : ''}`}>
              {faq.question}
            </h3>
            {isOpen === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Upcoming Events</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America/New_York"
          style={{ border: 0 }}
          width="100%"
          height="600"
          title="Google Calendar"
        ></iframe>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Cornell Tech Makerspace. All rights reserved.</p>
          <p>
            Contact us: <a href="mailto:info@cornelltechmakerspace.com">info@cornelltechmakerspace.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;