import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      axios.post('http://localhost:8080/api/register', {
        username,
        email,
        password,
        confirmPassword
      })
      .then(response => {
        window.alert("Registration successful!");
        window.location.href = '/login';
      })
      .catch(error => {
        window.alert("Error registering user.");
        console.error(error);
      });
    } else {
      window.alert("Please fill in all the required fields properly.");
    }
  };

  const validateForm = () => {
    return username && email && password && confirmPassword && (password === confirmPassword);
  };

  const styles = {
    registrationPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: `url('/bgimage.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    registerFormContainer: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
    },
    registerAvatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    registerTitle: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    registerForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '1rem',
    },
    registerButton: {
      padding: '0.75rem',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: 'black',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    registerButtonHover: {
      backgroundColor: 'grey',
    },
    loginLink: {
      marginTop: '1rem',
      fontSize: '0.875rem',
    },
  };

  return (
    <div style={styles.registrationPage}>
      <div style={styles.registerFormContainer}>
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/basic-linear-icon/sign-up-5.png"
          alt="Avatar"
          style={styles.registerAvatar}
        />
        <h2 style={styles.registerTitle}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.registerForm}>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.registerButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.registerButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.registerButton.backgroundColor)}
          >
            Sign Up
          </button>
          <p style={styles.loginLink}>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
