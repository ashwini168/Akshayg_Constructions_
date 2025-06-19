// src/components/Projects.jsx
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="section">
      <h2>Featured Projects</h2>
      <p>Take a look at our successfullyhry completed construction projects.</p>

      <div className="card-grid">
        <Link to="/project1" className="services-link">
          <div className="card">
            <img src="/images/project1.jpg" alt="Project 1" className="project-img" />
            <h3>Luxury Villa</h3>
            <p>Modern villa constructed in 2023 with premium architecture and materials.</p>
          </div>
        </Link>

        <Link to="/project2" className="services-link">
          <div className="card">
            <img src="/images/project2.jpg" alt="Project 2" className="project-img" />
            <h3>Smart Apartment</h3>
            <p>Eco-friendly smart home with cutting-edge automation systems.</p>
          </div>
        </Link>

        <Link to="/project3" className="services-link">
          <div className="card">
            <img src="/images/project3.jpg" alt="Project 3" className="project-img" />
            <h3>Commercial Tower</h3>
            <p>15-floor commercial space built on time with high safety standards.</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
