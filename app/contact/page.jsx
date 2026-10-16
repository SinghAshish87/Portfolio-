"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'; // Importing React Icons

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or display a success message)
    console.log(formData);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: '#333', marginBottom: '20px' }}>Contact Me</h1>

      {/* Contact Info Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#333', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <FaPhoneAlt style={{ marginRight: '10px', color: '#0070f3' }} />
          Contact Information
        </h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
          Feel free to reach out to me using the following contact methods:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <FaPhoneAlt style={{ marginRight: '10px', color: '#0070f3' }} />
            +1 (234) 567-890
          </li>
          <li style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ marginRight: '10px', color: '#0070f3' }} />
            email@example.com
          </li>
          <li style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <FaMapMarkerAlt style={{ marginRight: '10px', color: '#0070f3' }} />
            1234 Street, City, Country
          </li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
          <FaEnvelope style={{ marginRight: '10px', color: '#0070f3' }} />
          Send Me a Message
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px' }}>
          <label htmlFor="name" style={{ marginBottom: '8px', fontSize: '1.1rem', color: '#333' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              fontSize: '1.1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '20px',
              outline: 'none'
            }}
          />

          <label htmlFor="email" style={{ marginBottom: '8px', fontSize: '1.1rem', color: '#333' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              fontSize: '1.1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '20px',
              outline: 'none'
            }}
          />

          <label htmlFor="message" style={{ marginBottom: '8px', fontSize: '1.1rem', color: '#333' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              padding: '10px',
              fontSize: '1.1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '20px',
              outline: 'none'
            }}
          />

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#0070f3',
              color: 'white',
              fontSize: '1.2rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#005bb5'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Media Links Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#333', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <FaLinkedin style={{ marginRight: '10px', color: '#0070f3' }} />
          Connect With Me
        </h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
          You can also find me on the following platforms:
        </p>
        <ul style={{ display: 'flex', gap: '15px', listStyleType: 'none', paddingLeft: '0' }}>
          <li>
            <a href="https://www.linkedin.com/in/yourprofile" style={{ color: '#0070f3', fontSize: '1.5rem' }} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" style={{ color: '#0070f3', fontSize: '1.5rem' }} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </section>
      
      <style jsx>{`
        @media (max-width: 900px) {
          .about-main {
            flex-direction: column;
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
