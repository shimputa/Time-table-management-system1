import React,{useState} from 'react'
import Header from './Header'
import File from '../component/File'
import './Adddepartment.css'
import axios from 'axios'

const Addteacher = () => {
    const [showForm, setShowForm] = useState(false);
    const [departments, setDepartments] = useState([]);

    const handleClick = () => {
        setShowForm(!showForm);
      };
      const handleFormSubmit = (Fno,Fname,Alias,Contactno,Email,Designation) => {
        // Create a new department object
        const newDepartment = {
          Fno:Fno,
          Fname:Fname,
          Alias:Alias,
          Contactno:Contactno,
          Email:Email,
          Designation:Designation,
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
      <button onClick={handleClick} className="button addDep"> Add Teachers</button>

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
          <h2 >Teacher Information</h2>
          <table className=''>
            <thead>
              <tr>
                <th>Faculty No</th>
                <th>Faculty Name</th>
                <th>Alias</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Designation</th>
                
              </tr>
            </thead>
            <tbody>
              {departments.map((department, index) => (
                <tr key={index}>
                  <td>{department.Fno}</td>
                  <td>{department.Fname}</td>
                  <td>{department.Alias}</td>
                  <td>{department.Contactno}</td>
                  <td>{department.Email}</td>
                  <td>{department.Designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>


    </>
  )
}
function FormComponent({ onClose, onFormSubmit }) {
    const [facultyNo, setFacultyNo] = useState('');
    const [facultyName, setFacultyName] = useState('');
    const [alias, setAlias] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [designation, setDesignation] = useState('');


  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:1337/api/addteachers', {
          data: {
            faculty_name: facultyName,
            faculty_number: facultyNo,
            email: email,
            contact_number: contactNo,
            alias: alias,
            designation: designation
          }
        });
        console.log(response.data);
    
        // Call the onFormSubmit function passed as a prop to update the state in the parent component
        onFormSubmit(facultyNo,facultyName,alias,email,contactNo,designation);
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
        <label htmlFor="facultyNo">Faculty No.</label>
        <input
          type="text"
          id="facultyNo"
          value={facultyNo}
          onChange={(e) => setFacultyNo(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="facultyName">Faculty Name</label>
        <input
          id="facultyName"
          value={facultyName}
          onChange={(e) => setFacultyName(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="alias">Alias</label>
        <select id="alias" value={alias} onChange={(e) => setAlias(e.target.value)}  required className='select-style'>
        <option value="">Select Job type</option>
  <option value="Fulltime">Fulltime</option>
  <option value="Visiting">Visiting</option>
  <option value="Partial">Partial</option>
</select>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="contactNo">Contact Number</label>
        <input
          id="contactNo"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="designation">Designation</label>
        <input
          id="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
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

export default Addteacher