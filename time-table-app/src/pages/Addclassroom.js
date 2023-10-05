import React, { useState } from 'react';
import Header from './Header';
import File from '../component/File';
import './Adddepartment.css';
import axios from "axios";

const Addclassroom = () => {
  const [showForm, setShowForm] = useState(false);
  const [departments, setDepartments] = useState([]);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (
    classroomNumber,
    classroomType,
    departmentName,
    capacity
  ) => {
    // Create a new department object
    const newDepartment = {
      classroomNumber: classroomNumber,
      classroomType: classroomType,
      departmentName: departmentName,
      capacity:capacity
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
          Add Classroom
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
            <h2>Classroom Information</h2>
            <table className="">
              <thead>
                <tr>
                  <th>Classroom Number</th>
                  <th>Classroom Type</th>
                  <th>Capacity</th>
                  <th>Department Name</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department, index) => (
                  <tr key={index}>
                    <td>{department.classroomNumber}</td>
                    <td>{department.classroomType}</td>
                    <td>{department.capacity}</td>
                    <td>{department.departmentName}</td>
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
  const [classroomNumber, setClassroomNumber] = useState('');
  const [classroomType, setClassroomType] = useState('');
  const [capacity, setCapacity] = useState('');
  const [departmentName, setDepartmentName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1337/api/addclassrooms', {
        data: {
          classroom_number:classroomNumber ,
          classroom_type: classroomType,
          capacity: capacity,
          department_name: departmentName
        
        }
      });
      console.log(response.data);
  
      // Call the onFormSubmit function passed as a prop to update the state in the parent component
      onFormSubmit(classroomNumber,classroomType,departmentName);
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
        <label htmlFor="classroomNumber">Classroom Number</label>
        <input
          type="text"
          id="classroomNumber"
          value={classroomNumber}
          onChange={(e) => setClassroomNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="classroomType">Classroom Type</label>
        <select
          id="classroomType"
          value={classroomType}
          onChange={(e) => setClassroomType(e.target.value)}
          className="select-style"
          required
        >
        <option value="">Select Classroom Type</option>
          <option value="Theory class">Theory class</option>
          <option value="Lab class">Lab class</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="capacity">capacity</label>
        <input
          type="text"
          id="capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="departmentName">Department Name</label>
        <input
          id="departmentName"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Addclassroom;
