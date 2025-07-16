// src/components/Services.jsx
import React from 'react';


const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="card-wrapper">
        <div className="service-card">
          <img src="/images/Project-1-view-1.jpg" alt="Residential" />
          <h3>Residential Construction</h3>
          <p>We deliver custom homes with innovative designs and sustainable materials.</p>
        </div>
        <div className="service-card">
          <img src="/images/Project-1-view-2.jpg" alt="Commercial" />
          <h3>Commercial Buildings</h3>
          <p>Office complexes and retail spaces built to match your business needs.</p>
        </div>
        <div className="service-card">
          <img src="/images/in4.jpg" alt="Interior" />
          <h3>Interior Design</h3>
          <p>Modern, aesthetic interior spaces crafted by our expert designers.</p>
        </div>
        <div className="service-card">
          <img src="/images/in5.jpg" alt="Renovation" />
          <h3>Renovation Projects</h3>
          <p>Revamp your existing structures with our expert remodeling services.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
