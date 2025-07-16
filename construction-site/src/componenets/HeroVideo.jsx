// src/components/HeroVideo.jsx
import React from 'react';
import './HeroVideo.css'; // You’ll create this CSS

const HeroVideo = () => {
  return (
    <section className="hero-video">
      <video autoPlay muted loop playsInline className="hero-bg-video">
        <source src="/images/interior.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to AK Construction</h1>
        <p>Building a better tomorrow with precision and trust.</p>
      </div>
    </section>  
  );
};

export default HeroVideo;
