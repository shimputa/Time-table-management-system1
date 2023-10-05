// import React from 'react';
// import './Contact.css';
// import { FaFacebook, FaEnvelope, FaTwitter } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <>
//       <h2><strong>Contact Us </strong></h2>
//       <div className='flex'>
//         <div className='contactinfo'>
//           <h3>Contact Information</h3>
//           <p>Call: 92 232 262079 </p>
//           <p>Email: tiest@neduet.edu.pk</p>
//         </div>
//         <div className='socialmedia'>
//           <h3>Social Media</h3>
//           <div className='flex icon'>
//           <a href="https://www.facebook.com">
//               <FaFacebook size='30' /> {/* Facebook icon */}
//             </a>
//             <a href="mailto:tiest@neduet.edu.pk">
//               <FaEnvelope size='30' /> {/* Gmail icon */}
//             </a>
//             <a href="https://www.twitter.com">
//               <FaTwitter size='30' /> {/* Twitter icon */}
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;
import React from 'react';
import { FaFacebook, FaEnvelope, FaTwitter } from 'react-icons/fa'; // Assuming you're using react-icons for the icons

import './Contact.css'; // Import your CSS file for Contact styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-flex">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Call: 92 232 262079</p>
          <p>Email: tiest@neduet.edu.pk</p>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <div className="icon-flex">
            <a href="https://www.facebook.com">
              <FaFacebook size="30" />
            </a>
            <a href="mailto:tiest@neduet.edu.pk">
              <FaEnvelope size="30" />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter size="30" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

