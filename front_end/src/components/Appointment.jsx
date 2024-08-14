import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const Appointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    const doctor = location.state?.doctor;
    if (doctor) {
      setSelectedVeterinarian(doctor);
      setFormData(prevData => ({
        ...prevData,
        name: doctor.name
      }));
    }
  }, [location.state]);

  useEffect(() => {
    if (formData.location) {
      axios.get(`http://localhost:8080/veterinarians?location=${formData.location}`)
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
  
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.location || !selectedVeterinarian) {
      setError('Please fill in all fields.');
      return;
    }
  
    axios.post('http://localhost:8080/appointment', formData)
      .then(response => {
        setSuccess('Appointment booked successfully!');
        navigate('/success');
      })
      .catch(error => {
        console.error('Error booking the appointment:', error.response ? error.response.data : error.message);
        setError(`Error booking the appointment: ${error.response ? error.response.data : error.message}`);
      });
  };

  const containerStyle = {
    padding: '40px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/bgimage.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const cardStyle = {
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#ffffff'
  };

  const formContainerStyle = {
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const alertStyle = {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    fontSize: '16px'
  };

  const errorStyle = {
    ...alertStyle,
    backgroundColor: '#f8d7da',
    color: '#721c24'
  };

  const successStyle = {
    ...alertStyle,
    backgroundColor: '#d4edda',
    color: '#155724'
  };

  const buttonStyle = {
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s, box-shadow 0.2s',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card style={cardStyle}>
            <CardBody>
              <Container style={formContainerStyle}>
                <CardTitle tag="h4" style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>Book an Appointment</CardTitle>
                {error && <div style={errorStyle}>{error}</div>}
                {success && <div style={successStyle}>{success}</div>}
                <Form onSubmit={handleSubmit}>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <Label for="name" style={{ fontWeight: 'bold', color: '#333' }}>Your Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} style={{ borderRadius: '8px', padding: '12px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <Label for="email" style={{ fontWeight: 'bold', color: '#333' }}>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} style={{ borderRadius: '8px', padding: '12px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <Label for="location" style={{ fontWeight: 'bold', color: '#333' }}>Your Location</Label>
                    <Input type="text" name="location" id="location" placeholder="Enter your location" value={formData.location} onChange={handleChange} style={{ borderRadius: '8px', padding: '12px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <Label for="date" style={{ fontWeight: 'bold', color: '#333' }}>Preferred Date</Label>
                    <Input type="date" name="date" id="date" value={formData.date} onChange={handleChange} style={{ borderRadius: '8px', padding: '12px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '20px' }}>
                    <Label for="time" style={{ fontWeight: 'bold', color: '#333' }}>Preferred Time</Label>
                    <Input type="time" name="time" id="time" value={formData.time} onChange={handleChange} style={{ borderRadius: '8px', padding: '12px', border: '1px solid #ced4da' }} />
                  </FormGroup>
                  <Button type="submit" color="primary" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style = buttonHoverStyle} onMouseOut={(e) => e.currentTarget.style = buttonStyle}>Book Appointment</Button>
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
