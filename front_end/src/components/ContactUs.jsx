import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('http://localhost:8080/contact-us', formData)
      .then(response => {
        setSuccess('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(error => {
        setError('There was an error sending your message. Please try again.');
      });
  };

  const pageStyle = {
    padding: '2rem',
    backgroundImage: `url('/bgimage.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#e0f7fa', // Light blue background for a calming effect
    textAlign: 'center',
    minHeight: '100vh', // Ensure the section takes full viewport height
  };

  const contentContainerStyle = {
    maxWidth: '800px', // Maximum width for the content container
    margin: '0 auto', // Center the container horizontally
    padding: '2rem',
    backgroundColor: '#fff', // White background for the content
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#000', // Black color for the title
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#000', // Black color for the subtitle
    marginBottom: '2rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  };

  const formGroupStyle = {
    width: '100%',
    maxWidth: '600px', // Max width for form elements
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
    <div style={pageStyle}>
      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>Contact Us</h1>
        <p style={subtitleStyle}>
          We'd love to hear from you! Please fill out the form below to get in touch with us.
        </p>
        {error && <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: '#f8d7da', color: '#721c24' }}>{error}</div>}
        {success && <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: '#d4edda', color: '#155724' }}>{success}</div>}
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="subject" style={labelStyle}>Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={textareaStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
