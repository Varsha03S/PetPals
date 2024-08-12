import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindAPet = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/pets');
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleAdopt = (petId) => {
    const pet = pets.find((p) => p.id === petId);
    setSelectedPet(pet);
  };

  const handleCloseDetails = () => {
    setSelectedPet(null);
  };

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const petListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  };

  const petItemStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    width: '250px',
    textAlign: 'center',
  };

  const petImageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  };

  const petNameStyle = {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
  };

  const petTypeStyle = {
    color: '#555',
    marginBottom: '1rem',
  };

  const adoptButtonStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const adoptButtonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const petDetailsModalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const petDetailsStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '2rem',
    width: '80%',
    maxWidth: '600px',
    position: 'relative',
    textAlign: 'center',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Find a Pet</h1>
      <div style={petListStyle}>
        {pets.map((pet) => (
          <div key={pet.id} style={petItemStyle}>
            <img style={petImageStyle} src={pet.image} alt={pet.name} />
            <h2 style={petNameStyle}>{pet.name}</h2>
            <p style={petTypeStyle}>{pet.type}</p>
            <button
              style={adoptButtonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = adoptButtonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = adoptButtonStyle.backgroundColor}
              onClick={() => handleAdopt(pet.id)}
            >
              Adopt a Pet
            </button>
          </div>
        ))}
      </div>

      {selectedPet && (
        <div style={petDetailsModalStyle}>
          <div style={petDetailsStyle}>
            <button style={closeButtonStyle} onClick={handleCloseDetails}>×</button>
            <img style={petImageStyle} src={selectedPet.image} alt={selectedPet.name} />
            <h2>{selectedPet.name}</h2>
            <p>Type: {selectedPet.type}</p>
            <p>Description: {selectedPet.description}</p>
            <p>Location: {selectedPet.price}</p>
            <p>Age: {selectedPet.age} years</p>
            <p>Contact: {selectedPet.contact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindAPet;
