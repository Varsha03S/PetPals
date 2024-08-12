import React, { useState } from 'react';
import { Button, FormGroup, Label, Input, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorSelection = () => {
  const [location, setLocation] = useState(''); // Location input state
  const [service, setService] = useState(''); // Service input state
  const [veterinarians, setVeterinarians] = useState([]); // List of veterinarians
  const [selectedVeterinarian, setSelectedVeterinarian] = useState(null); // Selected veterinarian
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const navigate = useNavigate(); // Hook for navigation

  // Handle location input change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle service input change
  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (location.trim() && service.trim()) {
      setLoading(true);
      setError('');
      axios.get('http://localhost:8080/DoctorSelection', {
        params: { location: location.trim(), service: service.trim() }
      })
      .then(response => {
        setVeterinarians(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching veterinarians:', error);
        setError('Failed to fetch veterinarians. Please try again later.');
        setVeterinarians([]);
        setLoading(false);
      });
    } else {
      alert('Please enter both location and service.');
    }
  };

  // Handle veterinarian selection
  const handleVeterinarianSelection = (vet) => {
    setSelectedVeterinarian(vet);
  };

  // Handle appointment booking
  const handleBookAppointment = () => {
    if (selectedVeterinarian) {
      navigate(`/appointment/${selectedVeterinarian.id}`);
    } else {
      alert('Please select a veterinarian.');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e6f7ff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Select a Veterinarian</h1>
      
      <FormGroup style={{ marginTop: '30px', maxWidth: '600px' }}>
        <Label for="location">Enter Your Location:</Label>
        <Input 
          type="text" 
          id="location" 
          value={location} 
          onChange={handleLocationChange} 
          placeholder="e.g., New York" 
        />
      </FormGroup>

      <FormGroup style={{ marginTop: '20px', maxWidth: '600px' }}>
        <Label for="service">Select Service:</Label>
        <Input 
          type="text" 
          id="service" 
          value={service} 
          onChange={handleServiceChange} 
          placeholder="e.g., Surgery" 
        />
      </FormGroup>

      <Button 
        color="primary" 
        onClick={handleSearch}
      >
        Search Veterinarians
      </Button>

      {loading ? (
        <div style={{ marginTop: '30px' }}>
          <Spinner color="primary" /> Loading...
        </div>
      ) : error ? (
        <p style={{ color: 'red', marginTop: '30px' }}>{error}</p>
      ) : veterinarians.length > 0 ? (
        <div style={{ marginTop: '30px', maxWidth: '600px' }}>
          <h3>Select a Veterinarian:</h3>
          <ListGroup>
            {veterinarians.map(vet => (
              <ListGroupItem 
                key={vet.id} 
                style={{ 
                  marginBottom: '10px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  backgroundColor: selectedVeterinarian && selectedVeterinarian.id === vet.id ? '#d0f0c0' : 'white',
                  cursor: 'pointer'
                }}
                onClick={() => handleVeterinarianSelection(vet)}
              >
                <div>
                  <strong>{vet.name}</strong> - {vet.specialty}
                </div>
                <div>
                  Availability: {vet.availability} - Location: {vet.location}
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Button 
            color="success" 
            onClick={handleBookAppointment} 
            style={{ marginTop: '20px' }}
          >
            Book Appointment
          </Button>
        </div>
      ) : (
        <p>No veterinarians available for the selected service and location.</p>
      )}
    </div>
  );
};

export default DoctorSelection;
