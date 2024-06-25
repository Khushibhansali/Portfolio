import React from "react";
import "./events.css";

const Events = () => {
    return (
        <div className="events-container">
            <h1 style={{ marginBottom: "1rem" }}>Our Events</h1>
            
            <section className="events-section">
                <h2>Fall Open Studio Showcase</h2>
                <p>
                    The Fall Open Studio Showcase is an annual event where students present their projects created both in and out of class. It's a celebration of creativity and innovation, showcasing the diverse talents and skills of our students.
                </p>
                <div className="events-gallery">
                    <img src="path_to_image1.jpg" alt="Student work 1" />
                    <img src="path_to_image2.jpg" alt="Student work 2" />
                    <img src="path_to_image3.jpg" alt="Student work 3" />
                    {/* Add more images as needed */}
                </div>
            </section>
            
            <section className="events-section">
                <h2>Spring Open Studio</h2>
                <p>
                    The Spring Open Studio is another exciting event where students have the opportunity to showcase their work. This event highlights projects developed throughout the semester, offering a glimpse into the innovative and practical applications of their studies.
                </p>
                <div className="events-gallery">
                    <img src="path_to_image4.jpg" alt="Student work 4" />
                    <img src="path_to_image5.jpg" alt="Student work 5" />
                    <img src="path_to_image6.jpg" alt="Student work 6" />
                    {/* Add more images as needed */}
                </div>
            </section>
        </div>
    );
};

export default Events;
