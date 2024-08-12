import React, { useState } from 'react';
import axios from 'axios';

const FindHelp = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contact: '',
    description: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Post form data to the server
    axios.post('http://localhost:8080/find-help', formData)
      .then(response => {
        alert('Help request submitted successfully.');
        setFormData({
          name: '',
          location: '',
          contact: '',
          description: ''
        });
      })
      .catch(error => {
        console.error('Error submitting help request:', error);
        alert('Failed to submit request. Please try again.');
      });
  };

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#e0f7fa', // Light blue background for a calming effect
    textAlign: 'center',
    minHeight: '100vh', // Ensure the section takes full viewport height
  };
  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Light gray background for the content container
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px', // Max width for the content container
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#000', // Black color for the heading
    marginBottom: '1rem',
  };

  const imageStyle = {
    width: '100%', // Full-width image
    maxWidth: '800px', // Maximum width for larger screens
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.125rem',
    color: '#000', // Black color for the paragraph text
    marginBottom: '2rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
  };

  const formGroupStyle = {
    width: '100%',
    maxWidth: '500px', // Maximum width for form elements
    textAlign: 'left',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '1rem',
  };

  const textareaStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '100px',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'black', // Dark color for the button
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: 'grey', // Darker color for hover effect
  };
  
  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <h2 style={headingStyle}>Find Help</h2>
        <img 
          src="https://thumbs.dreamstime.com/b/concept-animal-shelter-stray-pets-kind-woman-help-homeless-animals-girl-adopting-dog-illustration-cages-cartoon-176040211.jpg" 
          alt="Help Stray Dogs" 
          style={imageStyle} 
        />
        <p style={paragraphStyle}>
          If you need help or advice regarding stray dogs in your area, please fill out the form below. Our community is here to assist you.
        </p>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Your Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your name" 
              style={inputStyle} 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="location" style={labelStyle}>Location</label>
            <input 
              type="text" 
              id="location" 
              placeholder="Your location" 
              style={inputStyle} 
              value={formData.location}
              onChange={handleChange}
              required 
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="contact" style={labelStyle}>Contact Information</label>
            <input 
              type="text" 
              id="contact" 
              placeholder="Your contact information" 
              style={inputStyle} 
              value={formData.contact}
              onChange={handleChange}
              required 
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="description" style={labelStyle}>Describe the Help or Advice Needed</label>
            <textarea 
              id="description" 
              placeholder="Describe the help or advice needed" 
              style={textareaStyle} 
              value={formData.description}
              onChange={handleChange}
              required 
            ></textarea>
          </div>
          <button 
            style={buttonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindHelp;
