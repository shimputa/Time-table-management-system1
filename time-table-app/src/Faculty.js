import React from 'react'
import './Faculty.css'

const images = [
    {
      src: 'Nasir_1.png',
      alt: 'Image 1',
      name: 'Prof. Dr. Nasir Uddin sehikh',
      description: 'Principal TIEST',
    },
    {
      src: 'dean.pnj.png',
      alt: 'Image 2',
      name: 'Prof. Dr. Noman Ahmed',
      description: 'Dean CSIT TIEST',
    },
    {
      src: 'S._M-removebg-preview (2).png',
      alt: 'Image 3',
      name: 'Prof. Dr. Syed Abbas Ali',
      description: 'Chairman  CSIT TIEST',
    },
  ];
const Faculty = () => {
  return (
    <>
    
    <div className="flex-container">
      <div className="flex-content">
        <h3 className="heading">Our Faculty</h3>
        <div className="image-container">
          {images.map((image, index) => (
            <div key={index} className="flex-item">
              <img src={image.src} alt={image.alt} className="image" />
              <h4 className="name">{image.name}</h4>
              <h5 className="description">{image.description}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default Faculty