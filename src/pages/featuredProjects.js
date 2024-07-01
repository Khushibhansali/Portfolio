import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    { id: 1, image: '../sewingMachine.jpeg', title: 'Project 1' },
    { id: 2, image: '../sewingMachine.jpeg', title: 'Project 2' },
    { id: 3, image: '../sewingMachine.jpeg', title: 'Project 3' },
    { id: 4, image: '../sewingMachine.jpeg', title: 'Project 4' },
    { id: 5, image: '../sewingMachine.jpeg', title: 'Project 5' },
  ];

  return (
    <section className="section">
      <h2 className="section-title">Featured Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProjects;