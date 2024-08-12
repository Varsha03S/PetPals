import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const Appointment = () => {
  const { doctorId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    location: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [veterinarians, setVeterinarians] = useState([]);
  const [selectedVeterinarian, setSelectedVeterinarian] = useState(null);

  useEffect(() => {
    if (formData.location) {
      axios.get(`http://localhost:8080/veterinarians/available?location=${formData.location}`)
        .then(response => {
          setVeterinarians(response.data);
        })
        .catch(error => {
          console.error('Error fetching veterinarians:', error);
        });
    }
  }, [formData.location]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.location || !selectedVeterinarian) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('http://localhost:8080/appointment', {
      name: formData.name,
      email: formData.email,
      preferredDate: formData.date,
      preferredTime: formData.time,
      veterinarianId: selectedVeterinarian.id
    })
      .then(response => {
        setSuccess('Appointment booked successfully!');
        setFormData({ name: '', email: '', date: '', time: '', location: '' });
        setSelectedVeterinarian(null);
      })
      .catch(error => {
        console.error('Error booking the appointment:', error);
        setError('There was an error booking the appointment. Please try again.');
      });
  };

  return (
    <Container style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0f4f8', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', backgroundColor: '#ffffff' }}>
            <CardBody>
              <Container style={{ padding: '20px', borderRadius: '15px', backgroundColor: '#e9ecef' }}>
                <CardTitle tag="h4" style={{ marginBottom: '20px', color: '#333' }}>Book an Appointment</CardTitle>
                {error && <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: '#f8d7da', color: '#721c24' }}>{error}</div>}
                {success && <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: '#d4edda', color: '#155724' }}>{success}</div>}
                <Form onSubmit={handleSubmit}>
                  <FormGroup style={{ marginBottom: '15px' }}>
                    <Label for="name" style={{ fontWeight: 'bold', color: '#333' }}>Your Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} style={{ borderRadius: '8px', padding: '10px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '15px' }}>
                    <Label for="email" style={{ fontWeight: 'bold', color: '#333' }}>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} style={{ borderRadius: '8px', padding: '10px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '15px' }}>
                    <Label for="location" style={{ fontWeight: 'bold', color: '#333' }}>Your Location</Label>
                    <Input type="text" name="location" id="location" placeholder="Enter your location" value={formData.location} onChange={handleChange} style={{ borderRadius: '8px', padding: '10px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  {/* {veterinarians.length > 0 && ( */}
                    <FormGroup style={{ marginBottom: '15px' }}>
                      <Label for="veterinarian" style={{ fontWeight: 'bold', color: '#333' }}>Select Veterinarian</Label>
                      <Input type="select" id="veterinarian" onChange={(e) => setSelectedVeterinarian(veterinarians.find(doctor => doctor.id === Number(e.target.value)))}>
                        <option value="">Select a veterinarian</option>
                        {veterinarians.map(vet => (
                          <option key={vet.id} value={vet.id}>{vet.name} - {vet.specialty}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  {/* )} */}
                  <FormGroup style={{ marginBottom: '15px' }}>
                    <Label for="date" style={{ fontWeight: 'bold', color: '#333' }}>Preferred Date</Label>
                    <Input type="date" name="date" id="date" value={formData.date} onChange={handleChange} style={{ borderRadius: '8px', padding: '10px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <Label for="time" style={{ fontWeight: 'bold', color: '#333' }}>Preferred Time</Label>
                    <Input type="time" name="time" id="time" value={formData.time} onChange={handleChange} style={{ borderRadius: '8px', padding: '10px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <Button type="submit" color="primary" style={{ borderRadius: '8px', padding: '10px 20px', fontSize: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>Book Appointment</Button>
                </Form>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Appointment;
