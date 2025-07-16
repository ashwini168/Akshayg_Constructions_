// src/components/Projects.jsx
import React from 'react';


const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Our Projects</h2>
      <div className="card-wrapper">
        <div className="project-card">
          <div className="image-wrapper">
            <img src="/images/in5.jpg" alt="Project 1" />
          </div>
          <h3>Urban Apartment Complex</h3>
          <p>Designed and built a modern living complex in the heart of the city.</p>
        </div>
        <div className="project-card">
          <div className="image-wrapper">
            <img src="/images/in2.jpg" alt="Project 2" />
          </div>
          <h3>Commercial Plaza</h3>
          <p>A spacious plaza featuring retail shops and office spaces.</p>
        </div>
        <div className="project-card">
          <div className="image-wrapper">
            <img src="/images/in3.jpg" alt="Project 3" />
          </div>
          <h3>Villa Renovation</h3>
          <p>Complete renovation of a countryside villa with premium features.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

