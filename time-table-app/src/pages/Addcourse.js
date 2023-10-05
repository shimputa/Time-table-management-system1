import React, { useState } from 'react';
import Header from './Header';
import File from '../component/File';
import './Adddepartment.css';
import axios from 'axios';

const Addcourse = () => {
  const [showForm, setShowForm] = useState(false);
  const [departments, setDepartments] = useState([]);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (
    courseName,
    courseCode,
    courseType,
    semester,
    department,
    creditHours
  ) => {
    // Create a new department object
    const newDepartment = {
      courseName: courseName,
      courseCode: courseCode,
      courseType: courseType,
      semester: semester,
      department: department,
      creditHours: creditHours,
    };
    // Add the new department to the departments array
    setDepartments([...departments, newDepartment]);
    // Close the form
    setShowForm(false);
  };

  return (
    <>
      <Header />
      <File />
      <div>
        <button onClick={handleClick} className="button addDep">
          Add course
        </button>

        {showForm && (
          // Render the form as a popup with blurred background
          <div className="popup">
            <div className="blur-background"></div>
            <div className="form-container">
              <FormComponent onClose={handleClick} onFormSubmit={handleFormSubmit} />
            </div>
          </div>
        )}

        {departments.length > 0 && (
          <div className="department-table">
            <h2>Course Information</h2>
            <table className="">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Course Code</th>
                  <th>Course Type</th>
                  <th>Credit Hours</th>
                  <th>Semester</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department, index) => (
                  <tr key={index}>
                    <td>{department.courseName}</td>
                    <td>{department.courseCode}</td>
                    <td>{department.courseType}</td>
                    <td>{department.semester}</td>
                    <td>{department.department}</td>
                    <td>{department.creditHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

function FormComponent({ onClose, onFormSubmit }) {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseType, setCourseType] = useState('');
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [creditHours, setCreditHours] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1337/api/addcourses', {
        data: {
          course_code: courseCode,
          course_name: courseName,
          course_type: courseType,
          semester: semester,
          department: department,
          credit_hours: creditHours
        
        }
      });
      console.log(response.data);
  
      // Call the onFormSubmit function passed as a prop to update the state in the parent component
      onFormSubmit(courseName,courseCode,courseType,creditHours,semester,department);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="form-department" onSubmit={handleSubmit}>
      <button className="close-button" onClick={onClose}>
        &#x2715;
      </button>
      <div className="form-group">
        <label htmlFor="courseName">Course Name</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
      </div>
     
      <div className="form-group">
        <label htmlFor="courseCode">Course Code</label>
        <input
          id="courseCode"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="courseType">Course Type</label>
        <select
          id="courseType"
          value={courseType}
          onChange={(e) => setCourseType(e.target.value)}
          className="select-style"
          required
        >
        <option value="">Select Course Type</option>
          <option value="Theory">Theory</option>
          <option value="Practical">Practical</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="semester">Semester</label>
        <input
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <input
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="creditHours">Credit Hours</label>
        <select
          id="creditHours"
          value={creditHours}
          onChange={(e) => setCreditHours(e.target.value)}
          className="select-style"
          required
        >
        <option value="">Select Hours</option>
          <option value="3">3 Hours</option>
          <option value="4">4 Hours</option>
          
          
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Addcourse;
