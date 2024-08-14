import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindAPet = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [editingPet, setEditingPet] = useState(null);
  const [editPetData, setEditPetData] = useState({});

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
    setEditingPet(null);
  };

  const handleEdit = (pet) => {
    setEditingPet(pet.id);
    setEditPetData({ ...pet });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (!editPetData.name || !editPetData.type) {
      alert('Please fill all required fields.');
      return;
    }
    
    try {
      const response = await axios.put(`http://localhost:8080/api/pets/update`, editPetData);
      setSelectedPet(editPetData);
      setEditingPet(null);
    } catch (error) {
      console.error('Error updating pet:', error);
      alert('Failed to save pet data. Please check the console for details.');
    }
  };

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowX: 'hidden', // Prevent horizontal overflow
  };

  const petListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    width: '100%', // Ensure the list does not exceed the viewport
    boxSizing: 'border-box',
    overflowX: 'hidden', // Prevent overflow
  };

  const petItemStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    width: '250px', // Fixed width, adjust as needed
    textAlign: 'center',
    boxSizing: 'border-box', // Include padding and border in width
    overflow: 'hidden', // Prevent content overflow
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
    backgroundColor: 'black',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const adoptButtonHoverStyle = {
    backgroundColor: 'grey',
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
    overflow: 'hidden', // Prevent overflow
  };

  const petDetailsStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '2rem',
    width: '90%', // Adjust width to fit better on smaller screens
    maxWidth: '600px', // Limit modal width
    position: 'relative',
    textAlign: 'center',
    boxSizing: 'border-box',
    overflow: 'hidden', // Prevent content overflow
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  };

  const actionButtonStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    margin: '0.5rem',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const saveButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: 'green',
    color: '#fff',
  };

  const cancelButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: 'red',
    color: '#fff',
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
            {editingPet === selectedPet.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editPetData.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="type"
                  value={editPetData.type}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
                <textarea
                  name="description"
                  value={editPetData.description}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="image"
                  value={editPetData.image}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="price"
                  value={editPetData.price}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
                <input
                  type="number"
                  name="age"
                  value={editPetData.age}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="contact"
                  value={editPetData.contact}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
                <button style={saveButtonStyle} onClick={handleSave}>Save</button>
                <button style={cancelButtonStyle} onClick={() => setEditingPet(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h2>{selectedPet.name}</h2>
                <p>Type: {selectedPet.type}</p>
                <p>Description: {selectedPet.description}</p>
                <p>Location: {selectedPet.price}</p>
                <p>Age: {selectedPet.age} years</p>
                <p>Contact: {selectedPet.contact}</p>
                <button style={adoptButtonStyle} onClick={() => handleEdit(selectedPet)}>Edit</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FindAPet;
