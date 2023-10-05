import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Adddepartment.css';
import axios from 'axios';

const Practical = () => {
  const [showForm, setShowForm] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [courseCodes, setCourseCodes] = useState([]);
  const [courseNames, setCourseNames] = useState([]);
  const [facultyNames, setFacultyNames] = useState([]);
  const [facultyNumbers, setFacultyNumbers] = useState([]);

  useEffect(() => {
    fetchCourseData();
    fetchFacultyData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/addcourses');
      const courseData = response.data.data;
      const courseCodesFromAPI = courseData.map(item => item.attributes.course_code);
      const courseNamesFromAPI = courseData.map(item => item.attributes.course_name);
      setCourseCodes(courseCodesFromAPI);
      setCourseNames(courseNamesFromAPI);
    } catch (error) {
      console.error('Error fetching course data:', error);
    }
  };

  const fetchFacultyData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/addteachers');
      const facultyData = response.data.data;
      const facultyNamesFromAPI = facultyData.map(item => item.attributes.faculty_name);
      const facultyNumbersFromAPI = facultyData.map(item => item.attributes.faculty_number);
      setFacultyNames(facultyNamesFromAPI);
      setFacultyNumbers(facultyNumbersFromAPI);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
    }
  };

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = async (courseName, facultyNo, courseCode, facultyName) => {
    const newAllotment = {
      course_name: courseName,
      faculty_number: facultyNo,
      course_code: courseCode,
      faculty_name: facultyName,
    };
  
    try {
      const response = await axios.post('http://localhost:1337/api/allotment-practicals', {
        data: newAllotment,
      });
  
      console.log(response.data); // Log the response data
  
      // Update the state with the new allotment information
      setTeachers([...teachers, newAllotment]);
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        console.error('Response:', error.response.data); // Log the response data for more details
      }
    }
  };

  return (
    <>
      <Header />

      <div>
        <button onClick={handleClick} className="button">
          Allot
        </button>

        {showForm && (
          <div className="popup">
            <div className="blur-background"></div>
            <div className="form-container">
              <FormComponent
                onClose={handleClick}
                onFormSubmit={handleFormSubmit}
                courseCodes={courseCodes}
                courseNames={courseNames}
                facultyNames={facultyNames}
                facultyNumbers={facultyNumbers}
              />
            </div>
          </div>
        )}

        {teachers.length > 0 && (
          <div className="teacher-table">
            <h2>Allotment of Theory courses</h2>
            <table className="">
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Faculty No</th>
                  <th>Faculty Name</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index}>
                    <td>{teacher.course_code}</td>
                    <td>{teacher.course_name}</td>
                    <td>{teacher.faculty_number}</td>
                    <td>{teacher.faculty_name}</td>
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

function FormComponent({ onClose, onFormSubmit, courseCodes, courseNames, facultyNames, facultyNumbers }) {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [facultyNo, setFacultyNo] = useState('');
  const [facultyName, setFacultyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(courseName, facultyNo, courseCode, facultyName);
  };

  return (
    <form className="form-department" onSubmit={handleSubmit}>
      <button className="close-button" onClick={onClose}>
        &#x2715;
      </button>
      <div className="form-group">
        <label htmlFor="courseCode">Course Code</label>
        <select
          id="courseCode"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          className="select-style"
          required
        >
          <option value="">Select Course Code</option>
          {courseCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="courseName">Course Name</label>
        <select
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="select-style"
          required
        >
          <option value="">Select Course Name</option>
          {courseNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="facultyNo">Faculty Number</label>
        <select
          id="facultyNo"
          value={facultyNo}
          onChange={(e) => setFacultyNo(e.target.value)}
          className="select-style"
          required
        >
          <option value="">Select Faculty Number</option>
          {facultyNumbers.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="facultyName">Faculty Name</label>
        <select
          id="facultyName"
          value={facultyName}
          onChange={(e) => setFacultyName(e.target.value)}
          className="select-style"
          required
        >
          <option value="">Select Faculty Name</option>
          {facultyNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
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

export default Practical;
