import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
  // const handleLogout = () => {
  //   // Perform the logout logic here
  //   // This can include clearing authentication tokens, redirecting, etc.
  //   // For simplicity, we will just log a message
  //   console.log('Logged out');
  // };
    return (
        <>
            <div className='navbar'>
                <ul className='navlist'>
                    <li>
                        <NavLink to='/add-department' className='navlink'>ADD Department</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add-teacher' className='navlink'>ADD teacher</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add-course' className='navlink'>Add course</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add-classroom' className='navlink'>Add classroom</NavLink>
                    </li>
                    <li className="dropdown" onMouseEnter={handleHover} onMouseLeave={handleHover}>Allotment
                    
    {isHovered && (
        <div className="dropdown-content">
          
            <li onClick={() => handleOptionClick('Values Theory Course')}>
              <NavLink to='/values-theory' className='navlink'>Theory</NavLink>
            </li>
            <li onClick={() => handleOptionClick('Practical Course')}>
              <NavLink to='/practical-course' className='navlink'>Practical</NavLink>
            </li>
            <li onClick={() => handleOptionClick('Classroom')}>
              <NavLink to='/classroom' className='navlink'>Classroom</NavLink>
            </li>
          
        </div>
      )}
      
    </li>
                    <li>
                        <NavLink to='/generate-table' className='navlink'>Generate table</NavLink>
                    </li>
                    <li>
                    <NavLink to='/'  className='navlink logout1 '>Logout</NavLink>
            </li>
                </ul>
            </div>
        </>
    )
}

export default Header