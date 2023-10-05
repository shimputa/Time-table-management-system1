import React,{useState} from 'react';
import './Teacherlogin.css';
import { NavLink } from 'react-router-dom';
const Teacherlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const apiUrl = 'http://localhost:1337/api/auth/local'; // Replace with the actual API URL
  
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: username, // Replace with your actual username value
        password: password, // Replace with your actual password value
      }),
    };
  
    try {
      const response = await fetch(apiUrl, requestData);
      const data = await response.json();
  
      // Handle the response data here, e.g. check for success or failure
      console.log('Response:', data);
  
      // You can perform further logic based on the response
      if (response.ok) {
        // Successful login, do something
        window.location.href = '/teacherdashboard';

      } else {
        // Login failed, do something else
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="login-page">
    <div className="login-container">
      <h2>Teacher Login</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit"><NavLink to="/teacherdashboard"> Login</NavLink> </button>
      </form>
      <p>
          Haven't signed in yet ? <NavLink to="/teachersignup">Signup</NavLink>
        </p>
    </div>
  </div>
  )
}

export default Teacherlogin