import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle error messages
  const [loading, setLoading] = useState(false); // To handle loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message on each submit
    setLoading(true); // Set loading state true

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/login', {
          username: email,
          password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // Assuming successful login redirects or shows success message
        window.alert("Login successful!");
        window.location.href = '/home';
      } catch (error) {
        // Extract error message from the response if available
        const errorMessage = error.response?.data || "Login failed. Please check your credentials.";
        setError(errorMessage); // Set error message
      } finally {
        setLoading(false); // Reset loading state
      }
    } else {
      setError("Please fill in all the required fields.");
    }
  };

  const validateForm = () => {
    return email && password;
  };

  const styles = {
    loginPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: `url('/bgimage.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    loginFormContainer: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
    },
    loginAvatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    loginTitle: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    loginForm: {
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
    loginButton: {
      padding: '0.75rem',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: 'black',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    loginButtonHover: {
      backgroundColor: 'grey',
    },
    signupLink: {
      marginTop: '1rem',
      fontSize: '0.875rem',
    },
    error: {
      color: 'red',
      marginBottom: '1rem',
    }
  };

  return (
    <div style={styles.loginPage}>
      <div style={styles.loginFormContainer}>
        <img
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          alt="Avatar"
          style={styles.loginAvatar}
        />
        <h2 style={styles.loginTitle}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.loginForm}>
        <input
         type="text"
         placeholder="Username" // Changed from 'Email' to 'Username'
         id="username"
         name="username"
         value={email} // Still using 'email' here, which should be renamed to 'username'
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
          <button
            type="submit"
            style={styles.loginButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.loginButtonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.loginButton.backgroundColor)}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p style={styles.signupLink}>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
