import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sectionStyle = {
    padding: '2rem',
    backgroundColor: '#e0f7fa', // Light blue background
    minHeight: '100vh', // Ensure the section takes full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    marginTop: '2rem', // Add margin to move the page down
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem', // Space between the cards
    flexWrap: 'wrap', // Wrap cards to the next line on small screens
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1200px',
    width: '100%',
    margin: '2rem auto',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const infoCardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'center',
  };

  return (
    <section style={sectionStyle}>
      {/* Service Cards */}
      <div style={rowStyle}>
        <ServiceCard
          imageSrc="https://img.freepik.com/premium-vector/adopt-pet-concept_23-2148517279.jpg"
          title="Adopt a Pet"
          description="Search the available pets"
          linkTo="/FindAPet"
          cardStyle={{
            backgroundColor: '#fff',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          }}
        />
        <ServiceCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GoBW9sEFl0r4KZCxsNvVipJ6BSARsQpcPA&s"
          title="Rehome My Pet"
          description="Start the process. It's free to list your pet on PetPals"
          linkTo="/ListAPet"
          cardStyle={{
            backgroundColor: '#fff', 
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>

      {/* Why Choose PetPals? */}
      <div>
        <h2 style={headingStyle}>Why Choose PetPals?</h2>
        <div style={gridStyle}>
          <InfoCard
            title="Extensive Network"
            content="PetPals connects you with a broad network of pet lovers and potential adopters."
          />
          <InfoCard
            title="Easy to Use"
            content="Our platform is user-friendly and free to list your pet or search for a new friend."
          />
          <InfoCard
            title="Dedicated Support"
            content="We provide dedicated support to ensure a smooth rehoming process."
          />
          <InfoCard
            title="Safe and Secure"
            content="Your pet's safety and security are our top priority."
          />
        </div>
      </div>

      {/* How It Works */}
      <div>
        <h2 style={headingStyle}>How It Works</h2>
        <div style={gridStyle}>
          <InfoCard
            title="Choose a Service"
            content="Select whether you want to adopt a pet or rehome your pet."
          />
          <InfoCard
            title="Fill Out the Form"
            content="Provide details about the pet you’re interested in or listing."
          />
          <InfoCard
            title="Review and Approval"
            content="Our team reviews and approves the listing for accuracy and completeness."
          />
          <InfoCard
            title="Connect and Match"
            content="Connect with potential adopters and find a perfect match for your pet."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ imageSrc, title, description, linkTo, cardStyle }) => {
  const cardLinkStyle = {
    textDecoration: 'none',
    color: 'inherit', // Inherit text color from parent
  };

  const cardStyleDefault = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    height: '400px', // Set a fixed height for consistency
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
    transition: 'transform 0.3s, box-shadow 0.3s',
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

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link to={linkTo} style={cardLinkStyle}>
      <div 
        style={{
          ...cardStyleDefault,
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

const InfoCard = ({ title, content }) => {
  const infoCardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'center',
  };

  return (
    <div style={infoCardStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Home;
