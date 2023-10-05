import React from 'react';
import './Buttons.css';
import { NavLink } from 'react-router-dom'

const Buttons = () => {
  return (
    <div className="centered-container">
    <button className="centered-button primary"> <NavLink to='/adminlogin' className='login' >Admin Login</NavLink></button>
    <button className="centered-button secondary"><NavLink to='/teacherlogin' className='login' >Teacher Login</NavLink></button>
  </div>
  )
}

export default Buttons