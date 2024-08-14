import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState({
    name: '',
    story: '',
  });

  useEffect(() => {
    // Fetch existing stories from the server
    axios.get('http://localhost:8080/success-stories')
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStory((prevStory) => ({
      ...prevStory,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/success-stories', newStory)
      .then(response => {
        setStories((prevStories) => [...prevStories, response.data]);
        setNewStory({ name: '', story: '' });
      })
      .catch(error => {
        console.error('Error submitting story:', error);
        alert('Failed to submit story. Please try again.');
      });
  };

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#e8f5e9', // Light green background for a refreshing feel
    textAlign: 'center',
    minHeight: '100vh', // Ensure the section takes full viewport height
    backgroundImage: `url('/bgimage.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    width: '100%', // Adjust as needed
    maxWidth: '600px', // Max width for the image
    height: 'auto',
    marginBottom: '1rem', // Space below the image
  };

  const storiesListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  };

  const storyCardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    width: '100%',
    maxWidth: '600px', // Max width for story cards
    textAlign: 'left',
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
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <h2 style={headingStyle}>Success Stories</h2>
        {/* <img
          src="/success.jpg" // Replace with your image URL
          alt="Success Stories"
          style={imageStyle}
        /> */}
        <div style={storiesListStyle}>
          {stories.map((story, index) => (
            <div key={index} style={storyCardStyle}>
              <h3>{story.name}</h3>
              <p>{story.story}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={newStory.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="story" style={labelStyle}>Your Success Story</label>
            <textarea
              id="story"
              name="story"
              placeholder="Share your success story"
              value={newStory.story}
              onChange={handleChange}
              style={textareaStyle}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuccessStories;
