// src/components/Services.jsx
import React, { useState } from 'react';


const Services = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const fashionImages = [
    "/images/Warehouse-1.jpg",
    "/images/Warehouse-2.jpg",
    "/images/Warehouse-3.jpg",
    "/images/Warehouse-4.jpg",
    "/images/Warehouse-5.jpg",
    "/images/Warehouse-6.jpg",
    "/images/Warehouse-7.jpg",
    "/images/Warehouse-8.jpg",
    "/images/Warehouse-9.jpg",
  ];

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
          <h3>Residental Buildings</h3>
          <p>Crafting your dream home with timeless elegance</p>
        </div>

        {/* Fashion Service - Grid Gallery */}
        <div className="service-card grid-service-card">
          
          <div class="grid-gallery-wrapper">
          <div className="grid-gallery">
            {fashionImages.map((src, idx) => (
              <img key={idx} src={src} alt={`Look ${idx + 1}`} onClick={() => openModal(src)} />
            ))}
          </div>
        </div>
        <h2 className="service-heading">Warehouse</h2>
          <p className="service-description">Nature’s lap, designed with care. Smart storage solutions with structural strength.</p>
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

      {/* Image Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>&times;</span>
          <img src={modalImage} alt="Enlarged view" className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default Services;
