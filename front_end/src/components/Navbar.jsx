import React, { useState } from 'react';
import petpals from '../assets/petpals.jpg';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false); // Close drawer on navigation
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Find a Pet', path: '/FindAPet' },
    { text: 'List a Pet', path: '/ListAPet' },
    { text: 'Clinical Services', path: '/ClinicalServices' },
    { text: 'Contact Us', path: '/ContactUs' }
  ];

  const styles = {
    appBar: {
      backgroundColor: 'black', // Brown color
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    logo: {
      height: '40px', // Adjust the logo size
    },
    title: {
      flexGrow: 1,
      color: '#fff',
      marginLeft: '10px',
    },
    mobileMenuIcon: {
      color: '#fff',
    },
    drawer: {
      width: '250px', // Width of the drawer
    },
    drawerListItem: {
      padding: '16px',
    },
  };

  return (
    <>
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <Box display="flex" alignItems="center">
            <img src={petpals} alt="Logo" style={styles.logo} />
            <Typography variant="h5" component="div" style={styles.title}>
              PetPals
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            style={styles.mobileMenuIcon}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        style={styles.drawer}
      >
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.path} onClick={() => handleNavigation(item.path)} style={styles.drawerListItem}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
