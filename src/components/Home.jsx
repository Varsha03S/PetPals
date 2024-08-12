import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sectionStyle = {
    padding: '2rem',
    backgroundColor: '#e0f7fa', // Light blue background
    minHeight: '100vh', // Ensure the section takes full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem', // Space between the cards
    flexWrap: 'wrap', // Wrap cards to the next line on small screens
  };

  return (
    <section style={sectionStyle}>
      <div style={rowStyle}>
        <ServiceCard
          imageSrc="https://img.freepik.com/premium-vector/adopt-pet-concept_23-2148517279.jpg"
          title="Adopt a Pet"
          description="Search the available pets"
          linkTo="/FindAPet"
        />
        <ServiceCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GoBW9sEFl0r4KZCxsNvVipJ6BSARsQpcPA&s"
          title="Rehome My Pet"
          description="Start the process. It's free to list your pet on PetPals"
          linkTo="/ListAPet"
        />
      </div>
    </section>
  );
};

const ServiceCard = ({ imageSrc, title, description, linkTo }) => {
  const cardLinkStyle = {
    textDecoration: 'none',
    color: 'inherit', // Inherit text color from parent
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    height: '400px', // Set a fixed height for consistency
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'center',
    position: 'relative',
  };

  const cardImgStyle = {
    width: '100%',
    height: '60%', // Adjust image height to fit within the card
    objectFit: 'cover',
  };

  const cardContentStyle = {
    padding: '1rem',
    height: '40%', // Set height for the content area
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center the content vertically
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  };

  // Handle hover effect using state
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link to={linkTo} style={cardLinkStyle}>
      <div 
        style={{
          ...cardStyle,
          ...(isHovered ? cardHoverStyle : {}),
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img src={imageSrc} alt={title} style={cardImgStyle} />
        <div style={cardContentStyle}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Home;
