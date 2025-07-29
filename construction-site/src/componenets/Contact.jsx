// ContactUs.jsx
import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent!');
    } else {
      alert('Failed to send. Try again.');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        

        {/* Info & Form */}
        <div className="contact-right">
          <div className="contact-info">
           

            <h3>Phone</h3>
            <p><strong>General:</strong> +91-9886238686</p>
            <p><strong>Project Enquiries:</strong> akshaygconstruction@gmail.com</p>
            <p><strong>Business Enquiries:</strong> akshaygconstruction@gmail.com</p>

            <div className="social-links">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group double">
              <input name="first_name" placeholder="First Name" onChange={handleChange} required />
              <input name="last_name" placeholder="Last Name" onChange={handleChange} required />
            </div>
            <div className="form-group double">
              <input name="phone" placeholder="Phone" onChange={handleChange} required />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            </div>
            <input name="subject" placeholder="Subject" onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows="5" onChange={handleChange} required />
            <button type="submit" className="cta">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
