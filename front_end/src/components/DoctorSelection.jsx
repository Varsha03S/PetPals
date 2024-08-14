import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Row } from 'reactstrap';

const DoctorsList = () => {
  const { service } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/DoctorSelection/${service}`);
        setDoctors(response.data);
      } catch (err) {
        setError('Failed to load doctors. Please try again.');
        console.error('Error fetching doctors:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [service]);

  const handleDoctorClick = (doctor) => {
    navigate('/appointment', { state: { doctor } });
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ padding: '20px', backgroundImage: `url('/bgimage.png')`,backgroundSize: 'cover',backgroundPosition: 'center', backgroundColor: '#e6f7ff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2rem',marginTop: '100px', color: 'grey' }}>Doctors List</h1>
      <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '1200px', width: '100%' }}>
        {doctors.map((doctor) => (
          <div
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              width: '100%', // Adjust width if needed
              maxWidth: '600px', // Set a max width for the cards
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            key={doctor.id}
            onClick={() => handleDoctorClick(doctor)}
          >
            <h5 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#333' }}>{doctor.name}</h5>
            {/* <p style={{ fontSize: '1rem', margin: '5px 0', color: '#666' }}>Specialty: {doctor.specialty}</p> */}
            <p style={{ fontSize: '1rem', margin: '5px 0', color: '#666' }}>Email: {doctor.email}</p>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default DoctorsList;
