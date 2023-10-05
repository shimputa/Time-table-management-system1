import React, { useState } from 'react';
import './Adminsignup.css';
import { NavLink } from 'react-router-dom';

const Teachersignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const apiUrl = 'http://localhost:1337/api/auth/local/register'; // Replace with the actual API URL
  
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username, // Replace with your actual username value
        email: email, // Replace with your actual email value
        password: password, // Replace with your actual password value
      }),
    };
  
    try {
      const response = await fetch(apiUrl, requestData);
      const data = await response.json();
  
      // Handle the response data here
      if (response.ok) {
        // Successful signup, do something
        console.log('Signup successful:', data);
        alert('regisererd succesfully')
        window.location.href= '/teacherlogin';
        // You might want to redirect the user to a dashboard or login page
      } else {
        // Signup failed, handle accordingly
        console.log('Signup failed:', data.errors); // Assuming the errors are in the 'errors' property of the response
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="signup-page-container">
      <div className="signup-container">
        <h2>Teacher Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <NavLink to="/teacherlogin">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Teachersignup;
