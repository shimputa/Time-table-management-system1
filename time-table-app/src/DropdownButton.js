import React, { useState } from 'react';
import './DropdownButton.css'; // Import CSS file

const DropdownButton = () => {
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  const handleDownload = () => {
    // Handle the download logic here
  };

  return (
    <form className="form">
  <div className='flex'>
  <div className="form-group">
    <label htmlFor="campus" className="form-label">Select Campus:</label>
    <select id="campus" value={selectedCampus} onChange={handleCampusChange} className="dropdown-select">
      <option value="">Select Department</option>
      <option value="campus1">CSIT DEPARTMENT</option>
      <option value="campus2">CIVIL DEPARTMENT</option>
      
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="batch" className="form-label">Select Batch:</label>
    <select id="batch" value={selectedBatch} onChange={handleBatchChange} className="dropdown-select">
      <option value="">Select Batch</option>
      <option value="batch1">2019</option>
      <option value="batch2">2020</option>
      <option value="batch3">2021</option>
      <option value="batch3">2022</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="semester" className="form-label">Select Semester:</label>
    <select id="semester" value={selectedSemester} onChange={handleSemesterChange} className="dropdown-select">
      <option value="">Select Semester</option>
      <option value="semester1">(Semester I)</option>
      <option value="semester2">(Semester II)</option>
      <option value="semester3">(Semester III)</option>
      <option value="semester4">(Semester IV)</option>
      <option value="semester1">(Semester V)</option>
      <option value="semester2">(Semester VI)</option>
      <option value="semester3">(Semester VII)</option>
      <option value="semester4">(Semester VIII)</option>
    </select>
  </div>
 
  </div>
  <div className="form-button">
    <button type="button" onClick={handleDownload} className="download-button">Download</button>
  </div>
</form>
  );
};

export default DropdownButton;
