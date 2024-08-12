import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/petpals.jpg'; // Import your logo image

const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url('/brown-concrete-textured-wall.jpg')`, // Adjusted path for public folder
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerLeft: {
      position: 'absolute',
      top: 20,
      left: 20,
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: '50px', // Adjust the size of the logo as needed
      height: 'auto',
    },
    topButtons: {
      position: 'absolute',
      top: 20,
      right: 20,
      display: 'flex',
      gap: '10px',
    },
    topButton: {
      backgroundColor: 'transparent',
      color: '#fff',
      fontSize: 'medium',
      fontWeight: 'bold',
      padding: '10px 20px',
      border: '2px solid #fff',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      width: '150px', // Adjust the width as needed
    },
    homeButton: {
      marginTop: '20px',
      backgroundColor: 'transparent',
      border: '2px solid #fff',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      width: '200px',
    },
    welcomeSection: {
      textAlign: 'center',
      color: '#fff',
      marginTop: '50px',
    },
    welcomeMessage: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    welcomeSubmessage: {
      fontSize: '24px',
      marginBottom: '40px',
    },
  };

  return (
    <div style={styles.container}>
      <Box style={styles.overlay}>
        <Box style={styles.headerLeft}>
          <img src={logo} alt="PetPals Logo" style={styles.logo} />
        </Box>
        <Box style={styles.topButtons}>
          <Button
            onClick={() => handleNavigation('/Login')}
            style={styles.topButton}
          >
            Login
          </Button>
          <Button
            onClick={() => handleNavigation('/register')}
            style={styles.topButton}
          >
            Sign Up
          </Button>
        </Box>
        
        <Box style={styles.welcomeSection}>
          <Typography variant="h2" color="bisque" fontFamily="'Trebuchet MS', sans-serif" style={styles.welcomeMessage}>
            Welcome to PetPals!
          </Typography>
          <Typography variant="h5" color="bisque" fontFamily="'Trebuchet MS', sans-serif" style={styles.welcomeSubmessage}>
            Your trusted companion for pet adoption and clinical services.
          </Typography>
          
          <Button
            onClick={() => handleNavigation('/Login')}
            style={styles.homeButton}
          >
            Explore
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Welcome;
