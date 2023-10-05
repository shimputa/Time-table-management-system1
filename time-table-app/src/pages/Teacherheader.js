import React from 'react';
import { NavLink } from 'react-router-dom';
import './Teacherheader.css';

const TeacherHeader = () => {
  return (
    <>
      <div className='navbar'>
        <ul className='navlist'>
          <li className='welcome'>Welcome</li>
          <li className='logout'>
            <NavLink to='/' className='navlink'>Logout</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TeacherHeader;
