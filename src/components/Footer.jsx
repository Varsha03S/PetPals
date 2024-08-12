import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#fff', // White color
      color: '#333', // Dark gray text for contrast
      padding: '40px 20px',
      textAlign: 'center',
      position: 'relative',
      bottom: 0,
      width: '100%',
      boxShadow: '0 -1px 5px rgba(0,0,0,0.1)', // Light shadow for a professional look
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    footerSection: {
      flex: '1 1 200px',
      margin: '10px',
    },
    footerTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333', // Dark text color
    },
    footerDescription: {
      fontSize: '16px',
      margin: '0',
      color: '#666', // Slightly lighter gray for text
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    socialLink: {
      color: '#333', // Dark gray icons
      fontSize: '24px',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    socialLinkHover: {
      color: '#007bff', // Blue color on hover
    },
    footerBottom: {
      borderTop: '1px solid #eaeaea',
      paddingTop: '10px',
      fontSize: '14px',
      color: '#666',
    },
    quickLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    link: {
      color: '#333',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#007bff',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h5 style={styles.footerTitle}>Contact Us</h5>
          <p style={styles.footerDescription}>
            Email: petpals@peto.in<br />
            Phone: +91 8888777700
          </p>
        </div>
        <div style={styles.footerSection}>
          <h5 style={styles.footerTitle}>Follow Us</h5>
          <div style={styles.socialLinks}>
            <a
              href="https://facebook.com"
              style={styles.socialLink}
              aria-label="Facebook"
              onMouseOver={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = styles.socialLink.color)}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              style={styles.socialLink}
              aria-label="Twitter"
              onMouseOver={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = styles.socialLink.color)}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              style={styles.socialLink}
              aria-label="Instagram"
              onMouseOver={(e) => (e.currentTarget.style.color = styles.socialLinkHover.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = styles.socialLink.color)}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div style={styles.footerSection}>
          <h5 style={styles.footerTitle}>Quick Links</h5>
          <div style={styles.quickLinks}>
            <Link to="/aboutus" style={styles.link} onMouseOver={(e) => (e.currentTarget.style.color = styles.linkHover.color)} onMouseOut={(e) => (e.currentTarget.style.color = styles.link.color)}>About Us</Link>
            <Link to="/strayhelper" style={styles.link} onMouseOver={(e) => (e.currentTarget.style.color = styles.linkHover.color)} onMouseOut={(e) => (e.currentTarget.style.color = styles.link.color)}>Stray Dog Helper Forum</Link>
            
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        &copy; 2024 PetPals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
