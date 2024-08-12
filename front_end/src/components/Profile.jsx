// src/Profile.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch the user profile from backend
        const response = await axios.get('http://localhost:8080/api/profile');
        setProfile(response.data);
      } catch (error) {
        setError('Error fetching profile data');
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the user profile on the backend
      await axios.put('http://localhost:8080/api/profile', profile);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Error updating profile');
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Container style={{ backgroundColor: '#f0f8ff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 className="page-title" style={{ marginBottom: '2rem', textAlign: 'center', color: '#004d99' }}>Profile</h1>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <Row>
        <Col md={8} className="offset-md-2">
          <Form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <FormGroup>
              <Label for="name" style={{ fontWeight: 'bold' }}>Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={profile.name}
                onChange={handleChange}
                required
                style={{ borderColor: '#004d99' }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" style={{ fontWeight: 'bold' }}>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={profile.email}
                onChange={handleChange}
                required
                style={{ borderColor: '#004d99' }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone" style={{ fontWeight: 'bold' }}>Phone</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                value={profile.phone}
                onChange={handleChange}
                style={{ borderColor: '#004d99' }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address" style={{ fontWeight: 'bold' }}>Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                value={profile.address}
                onChange={handleChange}
                style={{ borderColor: '#004d99' }}
              />
            </FormGroup>
            <Button type="submit" color="primary" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px' }}>Save Changes</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
