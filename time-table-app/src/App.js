import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About'; // Add your other components here
import Adminlogin from './login/Adminlogin';
import Teacherlogin from './login/Teacherlogin';
import Dashboard from './pages/Dashboard';
import Adddepartment from './pages/Adddepartment';
import Addclassroom from './pages/Addclassroom';
import Addteacher from './pages/Addteacher';
import Addcourse from './pages/Addcourse';
import Generatetable from './pages/Generatetable';
import Theory from './pages/Theory';
import Practical from './pages/Practical';
import Classroom from './pages/Classroom';
import Adminsignup from './login/Adminsignup';
import Teachersignup from './login/Teachersignup';
import Teacherdashboard from './pages/Teacherdashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add your other routes here */}
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/teacherlogin" element={<Teacherlogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-department" element={<Adddepartment />} />
        <Route path="/add-classroom" element={<Addclassroom />} /> {/* Add your other routes here */}
        <Route path="/add-teacher" element={<Addteacher />} />
        <Route path="/add-course" element={<Addcourse />} />
        <Route path="/generate-table" element={<Generatetable />} />
        <Route path="/values-theory" element={<Theory />} />
        <Route path="/practical-course" element={<Practical />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/adminsignup" element={<Adminsignup />} />
        <Route path="/teachersignup" element={<Teachersignup/>} />
        <Route path="/teacherdashboard" element={<Teacherdashboard/>} />
       


        


        
      </Routes>
    </Router>
  );
}

export default App;
