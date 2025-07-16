import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <h2>About Us</h2>
      <p>Meet our expert civil engineers committed to quality construction.</p>
      <div className="engineers">
        <div className="engineer-card">
          <img src="/images/person.jpg" alt="Engineer 1" />
          <h4>Arjun Patil</h4>
          <p>Senior Civil Engineer with 10+ years of structural experience.</p>
        </div>
        <div className="engineer-card">
          <img src="/images/person2.jpg" alt="Engineer 2" />
          <h4>Neha Kulkarni</h4>
          <p>Specialist in sustainable infrastructure and eco-friendly design.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
