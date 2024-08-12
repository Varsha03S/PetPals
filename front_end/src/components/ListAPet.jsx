import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListAPet = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petImage, setPetImage] = useState('');
  const [pets, setPets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/pets')
      .then(response => setPets(response.data))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!petName || !petType || !petDescription || !petImage) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');

    const newPet = { name: petName, type: petType, description: petDescription, image: petImage };

    try {
      const response = await axios.post('http://localhost:8080/api/pets/list', newPet, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setPets([...pets, response.data]);
      setPetName('');
      setPetType('');
      setPetDescription('');
      setPetImage('');
    } catch (error) {
      console.error('Error listing pet:', error);
      setError('Error listing pet. Please try again.');
    }
  };

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    boxSizing: 'border-box',
  };

  const formContainerStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    width: '100%',
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '0.75rem',
  };

  const textareaStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    height: '150px',
    marginBottom: '0.75rem',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'black',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '1rem',
  };

  const buttonHoverStyle = {
    backgroundColor: 'grey',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    width: '100%',
  };

  const petItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #ddd',
  };

  const petImageStyle = {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginRight: '1rem',
  };

  const petInfoStyle = {
    textAlign: 'left',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={{ textAlign: 'center' }}>List a Pet</h1>
        <p>
          To list a pet, please fill out the form below with your pet's details. Add a picture and a brief description to help potential adopters get to know your pet better.
        </p>
        <h2>Before you start…</h2>
        <p>Please make sure you’ve read and agree to these points before you create a listing:</p>
        <ol>
          <li>You won’t get paid for your pet but it is free to list them with our Charity.</li>
          <li>We can't help with emergency rehoming. You will need to be able to keep your pet for at least 4-6 weeks minimum before rehoming (more during peak holiday times when people are often away).</li>
          <li>All listings are subject to approval by the PetPals team. Before we post your listing on the site, we’ll check your pet’s profile thoroughly. If we have any questions, we will give you a call.</li>
          <li>If your listing does not provide a detailed description of your pet which must include a detailed description and a good quality photos, we will REJECT the listing and you will need to resubmit a new listing.</li>
          <li>We are NOT a rescue centre so we can't take pets directly into our care. We help you find a suitable adopter.</li>
          <li>We ONLY support the rehoming of pets that are living in Coimbatore.</li>
          <li>To help keep everyone safe, we monitor messages between rehomers and adopters.</li>
        </ol>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Pet Name:</label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            style={inputStyle}
          />
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Pet Type:</label>
          <input
            type="text"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            style={inputStyle}
          />
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Pet Description:</label>
          <textarea
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
            style={textareaStyle}
          />
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Pet Image URL:</label>
          <input
            type="text"
            value={petImage}
            onChange={(e) => setPetImage(e.target.value)}
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            List Pet
          </button>
        </form>
      </div>
      <div>
        <h2>Listed Pets:</h2>
        <ul style={listStyle}>
          {pets.map((pet) => (
            <li key={pet.id} style={petItemStyle}>
              <img src={pet.image} alt={pet.name} style={petImageStyle} />
              <div style={petInfoStyle}>
                <h3>{pet.name} ({pet.type})</h3>
                <p>{pet.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListAPet;
