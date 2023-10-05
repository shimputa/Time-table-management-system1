import React,{useState} from 'react';
import './Teacherlogin.css';
import { NavLink } from 'react-router-dom'



const Adminlogin = () => {
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
        window.location.href = '/add-department';

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
      <h2>Admin Login</h2>
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
        <button type="submit">Admin Login</button>
      </form>
      <p>
          Haven't signed in yet ? <NavLink to="/adminsignup">Signup</NavLink>
        </p>
    </div>
  </div>
  )
}

export default Adminlogin

// import React, { useState } from 'react';
// import './Teacherlogin.css';
// import { NavLink } from 'react-router-dom';

// const Adminlogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Create an object containing the login credentials
//     const credentials = {
//       identifier: username,
//       password: password,
//     };

//     try {
//       // Make an API call to perform login
//       const response = await fetch('http://localhost:1337//api/auth/local', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (response.ok) {
//         // Handle successful login, e.g., redirect to a dashboard
//         console.log('Login successful');
//       } else {
//         // Handle login error
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Admin Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={handleUsernameChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <button type="submit">Admin Login</button>
//         </form>
//         <p>
//           Haven't signed in yet ? <NavLink to="/adminsignup">Signup</NavLink>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Adminlogin;
