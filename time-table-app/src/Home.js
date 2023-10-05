import React from 'react';
import './Home.css';
import Sliders from './Sliders';
import Buttons from './Buttons';
import DropdownButton from './DropdownButton';
import Faculty from './Faculty';
import Contact from './login/Contact';




const Home = () => {
    
  return (
    <>
    <div class="header">
        <h3 align="center">TIME TABLE MANAGEMENT SYSTEM</h3>
      
    </div>
    <Sliders />
    <Buttons />
    <Faculty />
    <Contact />
    <div>
      <footer>
      &copy 2023 @TIEST.com | All Rights Reserved | | Design by : FYP GROUP # 3
      </footer>
    </div>
    
  </>
    
  )
}

export default Home;

