import React,{useState} from 'react'
import './File.css'

const File = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
  <div className="file-uploader">
      <label htmlFor="file-input" className="file-input-label">
        Import Excel file
      </label>
      <input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        className="file-input"
      />
      <p className="selected-file">
        Selected file: {selectedFile ? selectedFile.name : 'None'}
      </p>
    </div>

    </>
  )
}

export default File