import React, { useState, useEffect } from 'react';
import Header from './Header';
import File from '../component/File';
import './Adddepartment.css';
import axios from 'axios';

const Adddepartment = () => {
  const [showForm, setShowForm] = useState(false);
  const [departments, setDepartments] = useState([]);

  

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (name, description) => {
    const newDepartment = {
      name: name,
      description: description
    };
    setDepartments([...departments, newDepartment]);
    setShowForm(false);
  };

  return (
    <>
      <Header />
      <File /> 
      <div>
        <button onClick={handleClick} className="button addDep">
          Add Department
        </button>

        {showForm && (
          <div className="popup">
            <div className="blur-background"></div>
            <div className="form-container">
              <FormComponent onClose={handleClick} onFormSubmit={handleFormSubmit} />
            </div>
          </div>
        )}

        {departments.length > 0 && (
          <div className="department-table">
            <h2>Department Information</h2>
            <table className="">
              <thead>
                <tr>
                  <th>Department Name</th>
                  <th>Department Description</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department, index) => (
                  <tr key={index}>
                    <td>{department.name}</td>
                    <td>{department.description}</td>
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
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1337/api/adddepartments', {
        data: {
          department_name: departmentName,
          department_description: departmentDescription
        }
      });
      console.log(response.data);
  
      // Call the onFormSubmit function passed as a prop to update the state in the parent component
      onFormSubmit(departmentName, departmentDescription);
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
        <label htmlFor="departmentName">Department Name</label>
        <input
          type="text"
          id="departmentName"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="departmentDescription">Department Description</label>
        <textarea
          id="departmentDescription"
          value={departmentDescription}
          onChange={(e) => setDepartmentDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Adddepartment;
