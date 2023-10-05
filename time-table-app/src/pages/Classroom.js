import React, { useState , useEffect} from 'react';
import Header from './Header';
import File from '../component/File';
import './Adddepartment.css';
import axios from 'axios';

const Classroom = () => {
  const [showForm, setShowForm] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [courseCodes, setCourseCodes] = useState([]);
  const [courseNames, setCourseNames] = useState([]);
  const [facultyNames, setFacultyNames] = useState([]);
  const [facultyNumbers, setFacultyNumbers] = useState([]);
  const [departmentNames, setDepartmentNames] = useState([]);
  const [classroomNumbers, setClassroomNumbers] = useState([]);
  const [courseTypes, setCourseTypes] = useState([]);

  useEffect(() => {
    // Fetch course codes from the API when the component mounts
    axios
      .get('http://localhost:1337/api/addcourses')
      .then((response) => {
        const courseCodesFromAPI = response.data.data.map((item) => item.attributes.course_code);
        const courseNamesFromAPI = response.data.data.map((item) => item.attributes.course_name);
        const courseTypesFromAPI = response.data.data.map((item) => item.attributes.course_type);
        setCourseTypes(courseTypesFromAPI);
        setCourseNames(courseNamesFromAPI);
        setCourseCodes(courseCodesFromAPI);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch faculty names and numbers from the API when the component mounts
    axios
      .get('http://localhost:1337/api/addteachers')
      .then((response) => {
        const facultyNamesFromAPI = response.data.data.map((item) => item.attributes.faculty_name);
        const facultyNumbersFromAPI = response.data.data.map((item) => item.attributes.faculty_number);
        setFacultyNames(facultyNamesFromAPI);
        setFacultyNumbers(facultyNumbersFromAPI);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch department names from the API when the component mounts
    axios
      .get('http://localhost:1337/api/adddepartments')
      .then((response) => {
        const departmentNamesFromAPI = response.data.data.map((item) => item.attributes.department_name);
        setDepartmentNames(departmentNamesFromAPI);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch classroom numbers from the API when the component mounts
    axios
      .get('http://localhost:1337/api/addclassrooms')
      .then((response) => {
        const classroomNumbersFromAPI = response.data.data.map((item) => item.attributes.classroom_number);
        setClassroomNumbers(classroomNumbersFromAPI);
      })
      .catch((error) => {
        console.error(error);
      });

    
  }, []);


  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = async (
    departmentName,
    classroomno,
    courseCode,
    courseType,
    teacherName
  ) => {
    const newAllotment = {
      department_name: departmentName,
      classroom_number: classroomno,
      course_code: courseCode,
      course_type: courseType,
      teacher_name: teacherName,
    };
    try {
      // Make a POST request to store the allotment data
      const response = await axios.post('http://localhost:1337/api/allotment-classrooms', {
        data: newAllotment,
      });
      console.log(response.data);

      // Update the state with the new allotment information
      setTeachers([...teachers, newAllotment]);
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Response:', error.response); // Log the response for more details
    }
  };
  
    // setTeachers([...teachers, newTeacher]);
    // setShowForm(false);
  

  return (
    <>
      <Header />
      
      <div>
        <button onClick={handleClick} className="button">
          Open Form
        </button>

        {showForm && (
          <div className="popup">
            <div className="blur-background"></div>
            <div className="form-container">
              <FormComponent onClose={handleClick} 
              onFormSubmit={handleFormSubmit}
                courseCodes={courseCodes}
                courseNames={courseNames}
                facultyNames={facultyNames}
                departmentNames={departmentNames}
                courseTypes={courseTypes}
                classroomNumbers={classroomNumbers}

               />
            </div>
          </div>
        )}

        {teachers.length > 0 && (
          <div className="teacher-table">
            <h2>Teacher Information</h2>
            <table className="">
              <thead>
                <tr>
                  <th>Department Name</th>
                  <th>Classroom Course Name</th>
                  <th>Course Code</th>
                  <th>Course Type</th>
                  <th>Teacher Name</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index}>
                    <td>{teacher.departmentName}</td>
                    <td>{teacher.classroomno}</td>
                    <td>{teacher.courseCode}</td>
                    <td>{teacher.courseType}</td>
                    <td>{teacher.teacherName}</td>
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

function FormComponent({ onClose, onFormSubmit, courseCodes, courseTypes, courseNames,facultyNames, departmentNames,classroomNumbers }) {
  const [departmentName, setDepartmentName] = useState('');
  const [classroomno, setclassroomno] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseType, setCourseType] = useState('');
  const [teacherName, setTeacherName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(
      departmentName,
      classroomno,
      courseCode,
      courseType,
      teacherName
    );
  };

  return (
    <form className="form-department" onSubmit={handleSubmit}>
      <button className="close-button" onClick={onClose}>
        &#x2715;
      </button>
      <div className="form-group">
        <label htmlFor="departmentName">Department Name</label>
        <select
          id="departmentName"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          required
          className='select-style '
        >
          <option value="">Select department</option>
          {departmentNames.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="classroomno">Classroom Number</label>
        <select
          id="classroomno"
          value={classroomno}
          onChange={(e) => setclassroomno(e.target.value)}
          className='select-style '
          required
        >
        <option value="">Select Classroom</option>    
        
          {classroomNumbers.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
          {/* Add more options as needed */}
        </select>
      </div>
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
        <label htmlFor="courseType">Course Type</label>
        <select
          id="courseType"
          value={courseType}
          onChange={(e) => setCourseType(e.target.value)}
          className='select-style '
          required
        >
        <option value="">Select Course Type</option>    
          {courseTypes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="teacherName">Teacher Name</label>
        <select
          id="teacherName"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          className='select-style '
          required
        >
        <option value="">Select Faculty</option>    
        
          {facultyNames.map((code) => (
            <option key={code} value={code}>
              {code}
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

export default Classroom;

