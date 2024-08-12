import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const AdditionalDetails = () => {
  const [price, setPrice] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate();
  const location = useLocation();
  const pet = location.state.pet;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedPet = { ...pet, price, age, contact };

    try {
      const response = await axios.put('http://localhost:8080/api/pets/update', updatedPet);
      if (response.status === 200) {
        setMessage('Pet added successfully!');
        setMessageType('success');
        setTimeout(() => navigate('/FindAPet'), 2000); // Redirect after 2 seconds
      } else {
        throw new Error('Failed to add pet');
      }
    } catch (error) {
      setMessage('Error adding pet. Please try again.');
      setMessageType('error');
    }
  };

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
    },
    header: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontSize: '1rem',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      height: '100px',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    message: {
      marginTop: '20px',
      padding: '10px',
      borderRadius: '4px',
      textAlign: 'center',
    },
    success: {
      backgroundColor: '#d4edda',
      color: '#155724',
    },
    error: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Additional Details</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Pet Name:</label>
          <input
            type="text"
            value={pet.name}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Pet Type:</label>
          <input
            type="text"
            value={pet.type}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Pet Description:</label>
          <textarea
            value={pet.description}
            readOnly
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Pet Image URL:</label>
          <input
            type="text"
            value={pet.image}
            readOnly
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Contact Owner Details:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Submit
        </button>
        {message && (
          <div style={{ ...styles.message, ...styles[messageType] }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default AdditionalDetails;
