import React from 'react';

const AboutUs = () => {
  const styles = {
    page: {
      padding: '40px 20px',
     backgroundColor: '#e0f7fa',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
   
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      textAlign: 'left',
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#444',
    },
    cardText: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#555',
    },
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
    },
    listItem: {
      marginBottom: '10px',
      fontSize: '16px',
    },
    '@media (min-width: 768px)': {
      cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      card: {
        flex: '1 1 calc(33% - 20px)',
        margin: '0 10px',
      },
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Our Story</h2>
          <p style={styles.cardText}>
            PetPals started with a simple mission: to provide a seamless and compassionate experience for pet adoption and clinic management. Founded in 2024, our goal is to create a community where pets find their forever homes and owners get the best care for their furry friends.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Our Mission & Values</h2>
          <p style={styles.cardText}>
            At PetPals, our mission is to enhance the lives of pets and their owners through innovative technology and compassionate care. Our core values include:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Compassion: We care deeply about pets and their well-being.</li>
            <li style={styles.listItem}>Integrity: We operate with transparency and honesty.</li>
            <li style={styles.listItem}>Innovation: We continuously improve to meet the needs of our community.</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>What We Do</h2>
          <p style={styles.cardText}>
            PetPals offers a range of services including:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Pet Adoption: Helping you find the perfect pet companion.</li>
            <li style={styles.listItem}>Clinic Management: Streamlining clinic operations for better care.</li>
            <li style={styles.listItem}>Pet Wellness: Offering health tips and resources for your pet's well-being.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
