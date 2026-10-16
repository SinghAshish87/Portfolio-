'use client';

import { useState } from 'react';

const WebDesignerSection = () => {
  const [showMore, setShowMore] = useState(false); // State to manage visibility of extra content

  // Toggle function for showing and hiding extra content
  const handleButtonClick = () => {
    setShowMore(prevState => !prevState);
  };

  // Inline styles
  const roleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const additionalContentStyle = {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
  };

  return (
    <div>
      <div style={roleStyle}>Web Designer</div>
      <h1 style={descriptionStyle}>
        Here, you'll find a curated collection of my work that reflects my
        passion for visual storytelling and creative expression. With a
        strong belief in the power of design to communicate ideas and evoke
        emotions, I strive to create impactful visuals that resonate with
        audiences.
      </h1>
      <button
        onClick={handleButtonClick}
        style={showMore ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>

      {/* Conditionally rendered extra content */}
      {showMore && (
        <div style={additionalContentStyle}>
          <p>
            I specialize in creating modern, user-friendly websites that focus
            on both aesthetics and functionality. My design process involves
            understanding the needs of the user, and then crafting a visual
            experience that guides them through the site seamlessly.
          </p>
          <p>
            I have worked on various projects, ranging from eCommerce sites to
            creative portfolios, and I'm always looking to push the boundaries
            of what's possible in web design.
          </p>
        </div>
      )}
    </div>
  );
};

export default WebDesignerSection;
