import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const User = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get('http://localhost:8080/api/profile');
        setProfile(profileResponse.data);

        const appointmentsResponse = await axios.get('http://localhost:8080/api/user/appointments');
        setAppointments(appointmentsResponse.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8080/api/profile', profile);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Error updating profile');
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Container style={{ padding: '2rem' }}>
      <h1 className="page-title" style={{ marginBottom: '2rem', textAlign: 'center' }}>User Dashboard</h1>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <Row>
        <Col md={6}>
          <h2>Profile</h2>
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

        <Col md={6}>
          <h2>My Appointments</h2>
          <Table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Doctor</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
