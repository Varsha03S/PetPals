import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:8080/api/users');
        setUsers(usersResponse.data);

        const appointmentsResponse = await axios.get('http://localhost:8080/api/appointments');
        setAppointments(appointmentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleModal = () => setModal(!modal);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    toggleModal();
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container style={{ padding: '2rem' }}>
      <h1 className="page-title" style={{ marginBottom: '2rem', textAlign: 'center' }}>Admin Dashboard</h1>

      <Row>
        <Col md={6}>
          <h2>Users</h2>
          <Table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button color="info" onClick={() => handleUserClick(user)}>View</Button>
                    <Button color="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col md={6}>
          <h2>Appointments</h2>
          <Table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Doctor</th>
                <th>Time</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.user}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>User Details</ModalHeader>
        <ModalBody>
          {selectedUser && (
            <div>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Address:</strong> {selectedUser.address}</p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Admin;
