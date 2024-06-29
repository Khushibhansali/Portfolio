import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import "./coursework.css";
import background from '../home2.png';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const sliderSettings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div className="arrow next"></div>,
    prevArrow: <div className="arrow prev"></div>,
  };


  return (
    <div className="app-container">
      <Slider {...sliderSettings} className="info-slider">
        <div className="slide main-slide bgImg" style={{ backgroundImage: `url(${background})` }}>
          <img src={background} alt="Cornell Logo"/>
        </div>
        <div className="slide">
          <div className="events-section">
            <h1 className="main-title">What is a Makerspace</h1>
            <p>
            A vibrant hub where students from diverse backgrounds converge to push the boundaries of innovation, our makerspace empowers them to design, create, and fabricate their ideas into reality. By providing access to cutting-edge tools, resources, and a supportive community, we nurture a culture of collaboration, learning, and entrepreneurial spirit. Within these walls, students from various disciplines come together to tackle real-world challenges, driving technological advancements and fostering the next generation of innovators and problem-solvers.
            </p>
          </div>
          <div className="events-section">
            <h1 className="main-title">Importance on a Graduate Campus</h1>
            <p>
              At Cornell Tech, our makerspace bridges the gap between theoretical knowledge and practical application. Providing a platform for students to experiment, prototype, and turn their ideas into reality, the makerspace fosters academic and professional growth.
            </p>
          </div>    
        </div>
        <div className="slide">
          <div className="events-section">
            <h1 className="main-title">What We Offer</h1>
            <ul>
              <li>State-of-the-art equipment and tools for various projects.</li>
              <li>Workshops and coursework to enhance skills.</li>
              <li>Collaborative projects and networking opportunities with Weill Cornell, NYC Makerspaces, Roosevelt island local resident support, and outreach.</li>
              <li>Support from experienced mentors and industry experts.</li>
            </ul>
          </div>
        </div>
        <div className="slide">
          <div className="events-section">
            <h1 className="main-title">Featured Projects</h1>
            <Slider {...sliderSettings}>
              <div className="project-box">
                <img src="path_to_project_photo_1.jpg" alt="Project 1" />
                <p className="caption">Project 1 - Description</p>
              </div>
              <div className="project-box">
                <img src="path_to_project_photo_2.jpg" alt="Project 2" />
                <p className="caption">Project 2 - Description</p>
              </div>
              <div className="project-box">
                <img src="path_to_project_photo_3.jpg" alt="Project 3" />
                <p className="caption">Project 3 - Description</p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="slide">
          <div className="events-section">
            <h1 className="main-title">Frequently Asked Questions</h1>
            <div className="faq-item">
              <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
                What are the makerspace hours?
              </h3>
              {isOpen && <p>The makerspace is open from 8 AM to 8 PM, Monday to Friday.</p>}
            </div>
            <div className="faq-item">
              <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
                Who can use the makerspace?
              </h3>
              {isOpen && <p>The makerspace is available to all Cornell Tech students, faculty, and communities upon request.</p>}
            </div>
            <div className="faq-item">
              <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
                What equipment is available?
              </h3>
              {isOpen && <p>We offer 3D printers, laser cutters, CNC machines, and more.</p>}
            </div>
            <div className="faq-item">
              <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
                How do I get trained on the equipment?
              </h3>
              {isOpen && <p>We offer workshops and specialized trainings on this website to teach you       d.</p>}
            </div>
            <div className="faq-item">
              <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
                Can I bring my own materials?
              </h3>
              {isOpen && <p>Yes, you can bring your own materials or use the ones in the lab.</p>}
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="events-section">
            <h1 className="main-title">Upcoming Events</h1>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America/New_York"
              style={{ border: 0 }}
              width="800"
              height="600"
              title="Google Calendar"
            ></iframe>
          </div>
        </div>
      </Slider>

      <footer className="footer">
        <div className="footer-content full-width-section">
          <p>&copy; 2024 Cornell Tech Makerspace. All rights reserved.</p>
          <p>
            Contact us: <a href="mailto:info@cornelltechmakerspace.com">info@cornelltechmakerspace.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './index2.css';
// import './coursework.css';
// import background from '../home2.png';

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   const sliderSettings = {
//     dots: false, // Remove dots
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <div className="arrow next">&#8250;</div>,
//     prevArrow: <div className="arrow prev">&#8249;</div>,
//   };

//   return (
//     <div className="app-container">
//       <div className="parallax" style={{ backgroundImage: `url(${background})` }}>
//         <div className="layer">
//           <Slider {...sliderSettings} className="info-slider">
//             <div className="slide">
//               <div className="events-section">
//                 <h1 className="main-title">What is a Makerspace</h1>
//                 <p>
//                   A vibrant hub where students from diverse backgrounds converge to push the boundaries of innovation, our makerspace empowers them to design, create, and fabricate their ideas into reality. By providing access to cutting-edge tools, resources, and a supportive community, we nurture a culture of collaboration, learning, and entrepreneurial spirit. Within these walls, students from various disciplines come together to tackle real-world challenges, driving technological advancements and fostering the next generation of innovators and problem-solvers.
//                 </p>
//               </div>
//               <div className="events-section">
//                 <h1 className="main-title">Importance on a Graduate Campus</h1>
//                 <p>
//                   At Cornell Tech, our makerspace bridges the gap between theoretical knowledge and practical application. Providing a platform for students to experiment, prototype, and turn their ideas into reality, the makerspace fosters academic and professional growth.
//                 </p>
//               </div>    
//             </div>
//             <div className="slide">
//               <div className="events-section">
//                 <h1 className="main-title">What We Offer</h1>
//                 <ul>
//                   <li>State-of-the-art equipment and tools for various projects.</li>
//                   <li>Workshops and coursework to enhance skills.</li>
//                   <li>Collaborative projects and networking opportunities with Weill Cornell, NYC Makerspaces, Roosevelt island local resident support, and outreach.</li>
//                   <li>Support from experienced mentors and industry experts.</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="slide">
//               <div className="events-section">
//                 <h1 className="main-title">Featured Projects</h1>
//                 <Slider {...sliderSettings}>
//                   <div className="project-box">
//                     <img src="path_to_project_photo_1.jpg" alt="Project 1" />
//                     <p className="caption">Project 1 - Description</p>
//                   </div>
//                   <div className="project-box">
//                     <img src="path_to_project_photo_2.jpg" alt="Project 2" />
//                     <p className="caption">Project 2 - Description</p>
//                   </div>
//                   <div className="project-box">
//                     <img src="path_to_project_photo_3.jpg" alt="Project 3" />
//                     <p className="caption">Project 3 - Description</p>
//                   </div>
//                 </Slider>
//               </div>
//             </div>
//             <div className="slide">
//               <div className="events-section">
//                 <h1 className="main-title">Frequently Asked Questions</h1>
//                 <div className="faq-item">
//                   <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
//                     What are the makerspace hours?
//                   </h3>
//                   {isOpen && <p>The makerspace is open from 8 AM to 8 PM, Monday to Friday.</p>}
//                 </div>
//                 <div className="faq-item">
//                   <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
//                     Who can use the makerspace?
//                   </h3>
//                   {isOpen && <p>The makerspace is available to all Cornell Tech students, faculty, and communities upon request.</p>}
//                 </div>
//                 <div className="faq-item">
//                   <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
//                     What equipment is available?
//                   </h3>
//                   {isOpen && <p>We offer 3D printers, laser cutters, CNC machines, and more.</p>}
//                 </div>
//                 <div className="faq-item">
//                   <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
//                     How do I get trained on the equipment?
//                   </h3>
//                   {isOpen && <p>We offer workshops and specialized trainings on this website to teach you everything you need to know.</p>}
//                 </div>
//                 <div className="faq-item">
//                   <h3 onClick={toggleAccordion} className={`faq-question ${isOpen ? 'open' : ''}`}>
//                     Can I bring my own materials?
//                   </h3>
//                   {isOpen && <p>Yes, you can bring your own materials or use the ones in the lab.</p>}
//                 </div>
//               </div>
//             </div>
//             <div className="slide">
//               <div className="events-section">
//                 <h1 className="main-title">Upcoming Events</h1>
//                 <iframe
//                   src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America/New_York"
//                   style={{ border: 0 }}
//                   width="800"
//                   height="600"
//                   title="Google Calendar"
//                 ></iframe>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </div>

//       <footer className="footer">
//         <div className="footer-content full-width-section">
//           <p>&copy; 2024 Cornell Tech Makerspace. All rights reserved.</p>
//           <p>
//             Contact us: <a href="mailto:info@cornelltechmakerspace.com">info@cornelltechmakerspace.com</a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import React, { useEffect } from 'react';
// import './index3.css';
// import './coursework.css';
// import background from '../home2.png';
// import Spline from '@splinetool/react-spline';
// import '../App.css';

// const parallaxElements = [
//   { id: 'section1', speed: 0.3 },
//   { id: 'section2', speed: 0.2 },
//   { id: 'section3', speed: 0.4 },
//   { id: 'section4', speed: 0.5 },
//   { id: 'section5', speed: 0.6 },
// ];

// export default function App() {
//   useEffect(() => {
//     const handleScroll = () => {
//       parallaxElements.forEach((element) => {
//         const el = document.getElementById(element.id);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           const offset = window.pageYOffset - rect.top + window.innerHeight / 2;
//           el.style.transform = `translateY(${offset * element.speed}px)`;
//         }
//       });
//     };

//     const animate = () => {
//       requestAnimationFrame(animate);
//       handleScroll();
//     };

//     animate();

//     return () => cancelAnimationFrame(animate);
//   }, []);

//   return (
//     <div className="app-container">
//       <div id="section1" className="parallax-section">
//         <div className="bgImg" style={{ backgroundImage: `url(${background})` }}>
//           <Spline scene="https://prod.spline.design/iZttWbFd49nkHeCi/scene.splinecode" />
//         </div>
//       </div>
//       <div id="section2" className="parallax-section">
//         <div className="events-section">
//           <h1 className="main-title">What is a Makerspace</h1>
//           <p>
//             A vibrant hub where students from diverse backgrounds converge to push the boundaries of innovation, our makerspace empowers them to design, create, and fabricate their ideas into reality. By providing access to cutting-edge tools, resources, and a supportive community, we nurture a culture of collaboration, learning, and entrepreneurial spirit. Within these walls, students from various disciplines come together to tackle real-world challenges, driving technological advancements and fostering the next generation of innovators and problem-solvers.
//           </p>
//         </div>
//       </div>
//       <div id="section3" className="parallax-section">
//         <div className="events-section">
//           <h1 className="main-title">Importance on a Graduate Campus</h1>
//           <p>
//             At Cornell Tech, our makerspace bridges the gap between theoretical knowledge and practical application. Providing a platform for students to experiment, prototype, and turn their ideas into reality, the makerspace fosters academic and professional growth.
//           </p>
//         </div>
//       </div>
//       <div id="section4" className="parallax-section">
//         <div className="events-section">
//           <h1 className="main-title">What We Offer</h1>
//           <ul>
//             <li>State-of-the-art equipment and tools for various projects.</li>
//             <li>Workshops and coursework to enhance skills.</li>
//             <li>Collaborative projects and networking opportunities with Weill Cornell, NYC Makerspaces, Roosevelt island local resident support, and outreach.</li>
//             <li>Support from experienced mentors and industry experts.</li>
//           </ul>
//         </div>
//       </div>
//       <div id="section5" className="parallax-section">
//         <div className="events-section">
//           <h1 className="main-title">Frequently Asked Questions</h1>
//           <div className="faq-item">
//             <h3>What are the makerspace hours?</h3>
//             <p>The makerspace is open from 8 AM to 8 PM, Monday to Friday.</p>
//           </div>
//           <div className="faq-item">
//             <h3>Who can use the makerspace?</h3>
//             <p>The makerspace is available to all Cornell Tech students, faculty, and communities upon request.</p>
//           </div>
//           <div className="faq-item">
//             <h3>What equipment is available?</h3>
//             <p>We offer 3D printers, laser cutters, CNC machines, and more.</p>
//           </div>
//           <div className="faq-item">
//             <h3>How do I get trained on the equipment?</h3>
//             <p>We offer workshops and specialized trainings on this website to teach you.</p>
//           </div>
//           <div className="faq-item">
//             <h3>Can I bring my own materials?</h3>
//             <p>Yes, you can bring your own materials or use the ones in the lab.</p>
//           </div>
//         </div>
//       </div>
//       <footer className="footer">
//         <div className="footer-content full-width-section">
//           <p>&copy; 2024 Cornell Tech Makerspace. All rights reserved.</p>
//           <p>
//             Contact us: <a href="mailto:info@cornelltechmakerspace.com">info@cornelltechmakerspace.com</a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // import React from "react";
// // import Hero from "./hero";
// // import About from "./about2";
// // // import Gallery from "../Gallery/Gallery";
// // import Features from "./features";
// // // import template from "../template";

// // const App = () => (
// //   <div>
// //     <Hero />
// //    <Features />
// //     <About />
// //     {/* <Gallery images={template.galleryImages} /> */}
// //   </div>
// // );

// // export default App;
