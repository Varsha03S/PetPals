import React from 'react';
import { Link } from 'react-router-dom';

const Strayhelper = () => {
  const sectionStyle = {
    padding: '2rem',
    backgroundColor: '#e0f7fa', // Light blue background for a calming effect
    textAlign: 'center',
    minHeight: '100vh',
   
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#000', // Black color for the heading
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.125rem',
    color: '#000', // Black color for the paragraph text
    marginBottom: '2rem',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    marginTop: '2rem', // Space above the card container
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px', // Slightly more rounded corners
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // More pronounced shadow
    width: '300px',
    height: '350px',
    padding: '1.5rem',
    textDecoration: 'none',
    color: '#000', // Black color for the card text
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  const cardImageStyle = {
    width: '120px', // Larger image for better visual impact
    height: '120px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '1rem',
  };

  const hoverStyle = {
    transform: 'scale(1.05)', // Slight zoom effect on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = hoverStyle.transform;
    e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = '';
  };

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Stray Dog Helper Forum</h2>
        <p style={paragraphStyle}>
          Join our community to discuss and find help for stray dogs.
        </p>
        <div style={cardContainerStyle}>
          <Link to="/general-discussions" style={{ textDecoration: 'none' }}>
            <div
              style={cardStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1535/1535014.png"
                alt="General Discussions"
                style={cardImageStyle}
              />
              <h3>General Discussions</h3>
              <p>Talk about anything related to stray dogs.</p>
            </div>
          </Link>
          <Link to="/find-help" style={{ textDecoration: 'none' }}>
            <div
              style={cardStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/7498/7498864.png?semt=ais_hybrid"
                alt="Find Help"
                style={cardImageStyle}
              />
              <h3>Find Help</h3>
              <p>Seek help and advice for stray dogs in your area.</p>
            </div>
          </Link>
          <Link to="/success-stories" style={{ textDecoration: 'none' }}>
            <div
              style={cardStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img
                src="https://img.freepik.com/premium-vector/success-stories-icon-megaphone-with-success-stories-message-bubble-speech-banner-loudspeaker-announcement-advertising-vector-eps-10-isolated-white-background_399089-1080.jpg"
                alt="Success Stories"
                style={cardImageStyle}
              />
              <h3>Success Stories</h3>
              <p>Share your success stories of helping stray dogs.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Strayhelper;
