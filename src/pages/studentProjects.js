import React from 'react';
import './projects.css';

const projects = [
  { id: 1, title: "Project 1", description: "Description for project 1", imageUrl: "https://via.placeholder.com/300" },
  { id: 2, title: "Project 2", description: "Description for project 2", imageUrl: "https://via.placeholder.com/300" },
  // Add more project details here...
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Student Projects Showcase</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <div className="project-text">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
