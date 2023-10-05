// import React, { useState } from 'react';
// import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import './Teacherdashboard.css'
// import Teacherheader from './Teacherheader';

// const Teacherdashboard = () => {
//     const [department, setDepartment] = useState('');
//     const [semester, setSemester] = useState('');
//     const [timeTableData, setTimeTableData] = useState(null);
  
//     const handleDepartmentChange = (event) => {
//       setDepartment(event.target.value);
//     };
  
//     const handleSemesterChange = (event) => {
//       setSemester(event.target.value);
//     };
  
//     const fetchTimeTableData = () => {
//       // Fetch time table data based on department and semester
//       // Update the timeTableData state variable with the fetched data
//     };
  
//     const generatePDF = () => {
//       const timeTablePDF = (
//         <Document>
//           <Page style={styles.page}>
//             <View style={styles.container}>
//               <Text style={styles.heading}>Time Table</Text>
//               {/* Render the time table data here */}
//             </View>
//           </Page>
//         </Document>
//       );
  
//       return timeTablePDF;
//     };
  
//     return (
//         <>
//         <Teacherheader />
//       <div className="time-table-container">
//         <div className="select-container">
//           <label>
//             Department:
//             <select
//               className="select-dropdown"
//               value={department}
//               onChange={handleDepartmentChange}
//             >
//               <option value="department1">computer science</option>
//               <option value="department2">civil</option>
//               {/* Add options for other departments */}
//             </select>
//           </label>
  
//           <label>
//             Semester:
//             <select
//               className="select-dropdown"
//               value={semester}
//               onChange={handleSemesterChange}
//             >
//               <option value="semester1">Semester 1</option>
//               <option value="semester2">Semester 2</option>
//               {/* Add options for other semesters */}
//             </select>
//           </label>
  
//           <button className="generate-button" onClick={fetchTimeTableData}>
//             Generate Time Table
//           </button>
  
//           {timeTableData && (
//             <PDFDownloadLink
//               document={generatePDF()}
//               fileName="time_table.pdf"
//               className="download-button"
//             >
//               Download PDF
//             </PDFDownloadLink>
//           )}
//         </div>
  
//         {timeTableData && (
//           <table className="time-table">
//             <thead>
//               <tr>
//                 <th>Time</th>
//                 <th>Monday</th>
//                 <th>Tuesday</th>
//                 <th>Wednesday</th>
//                 <th>Thursday</th>
//                 <th>Friday</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Render the time table data here */}
//             </tbody>
//           </table>
//         )}
//       </div>
//       </>
//     );
// };
// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#fff',
//     },
//     container: {
//       flex: 1,
//       padding: 30,
//       fontFamily: 'Helvetica',
//     },
//     heading: {
//       fontSize: 20,
//       marginBottom: 30,
//       textAlign: 'center',
//     },
//   });

// export default Teacherdashboard;

import React, { useState,useRef } from 'react';
import './Teacherdashboard.css'
import Teacherheader from './Teacherheader';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Generatetable = () => {
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [timeTableData, setTimeTableData] = useState(null);
    const [printVisible, setPrintVisible] = useState(false);
  const tableRef = useRef(null);
  
    const handleDepartmentChange = (event) => {
      setDepartment(event.target.value);
    };
  
    const handleSemesterChange = (event) => {
      setSemester(event.target.value);
    };
    const togglePrint = () => {
      setPrintVisible(!printVisible);
    };
  
    const generatePDF = () => {
      const input = tableRef.current;
  
      if (input) {
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
          pdf.save('time-table.pdf');
        });
      }
    };
    const fetchTimeTableData = () => {
      // Fetch time table data based on department and semester
      // Update the timeTableData state variable with the fetched data
      // For now, let's simulate setting the timetable data manually

      // Create separate data for different department and semester combinations
      if (department === 'department1' && semester === 'semester1') {
        setTimeTableData([
          // Data for Department 1, Semester 1
          // ...
          {
            time: '8:30 AM - 9:20 AM',
            monday: '',
            tuesday: '',
            wednesday: 'progtaming fundamental lab (PF)(CT-175)',
            thursday: '',
            friday: 'applied Physic  lab (AP) (CT-174)',
          },
          {
            time: '9:20 AM - 10:10 AM',
            monday: '',
            tuesday: 'progtaming fundamental(PF)(CT-175)',
            wednesday: 'progtaming fundamental lab (PF)(CT-175)',
            thursday: 'functional English (FE)(HS-104)',
            friday: 'applied Physic  lab (AP) (CT-174)',
          },
          {
            time: '10:10 AM - 11:00 AM',
            monday: '',
            tuesday: 'progtaming fundamental(PF)(CT-175)',
            wednesday: 'progtaming fundamental lab (PF)(CT-175)',
            thursday: 'applied Physic  lab (AP) (CT-174)',
            friday: 'applied Physic  lab (AP) (CT-174)',
          },
          {
            time: '11:00 AM - 11:30 AM', // Break
            monday: 'Break',
            tuesday: 'Break',
            wednesday: 'Break',
            thursday: 'Break',
            friday: 'Break',
          },
          {
            time: '11:30 AM - 12:20 PM',
            monday: '',
            tuesday: 'functional English (FE)(HS-104)',
            wednesday: 'progtaming fundamental(PF)(CT-175)',
            thursday: 'pakistan studies (PS)(HS-105)',
            friday: 'Fundamental of information Technology(FIT)(CT-174)',
          },
          {
            time: '12:20 PM - 1:00 PM',
            monday: '',
            tuesday: 'functional English (FE)(HS-104)',
            wednesday: 'library Timings',
            thursday: 'pakistan studies (PS)(HS-105)',
            friday: 'Fundamental of information Technology(FIT)(CT-174)',
          },
          {
            time: '1:00 PM - 2:00 PM', // Lunch Break
            monday: 'Lunch Break',
            tuesday: 'Lunch Break',
            wednesday: 'Lunch Break',
            thursday: 'Lunch Break',
            friday: 'Lunch Break',
          },
          {
            time: '2:00 PM - 2:50 PM',
            monday: '',
            tuesday: '',
            wednesday: 'Fundamental of information Technology lab (FIT)(CT-174)',
            thursday: 'Mathematics-1 (MT-001) (MT-1)',
            friday: 'Mathematics-1 (MT-001) (MT-1)',
          },
          {
            time: '2:50 PM - 3:40 PM',
            monday: '',
            tuesday: '',
            wednesday: 'Fundamental of information Technology lab (FIT)(CT-174)',
            thursday: 'applied Physics (AP) (CT-174)',
            friday: 'Mathematics-1 (MT-001) (MT-1)',
          },
          {
            time: '3:40 PM - 4:30 PM',
            monday: '',
            tuesday: '',
            wednesday: 'Fundamental of information Technology lab (FIT)(CT-174)',
            thursday: 'applied Physics (AP) (CT-174)',
            friday: '',
          },
        ]);
      } else if (department === 'department1' && semester === 'semester2') {
        setTimeTableData([
          // Data for Department 1, Semester 2
          // ...
          {
            time: '8:30 AM - 9:20 AM',
            monday: 'Chinese Language (HSK 1)',
            tuesday: 'ARW (HS-115)',
            wednesday: 'LDST(CS-251)(Lab)',
            thursday: '',
            friday: 'OOP (CT-260)',
          },
          {
            time: '9:20 AM - 10:10 AM',
            monday: 'Chinese Language (HSK 1)',
            tuesday: 'ARW (HS-115)',
            wednesday: 'LDST(CS-251)(Lab)',
            thursday: '',
            friday: 'Mathemetics (MT-002)',
          },
          {
            time: '10:10 AM - 11:00 AM',
            monday: 'LDST(CS-251)',
            tuesday: 'Library Timing',
            wednesday: 'LDST(CS-251)(Lab)',
            thursday: '',
            friday: 'Library Timing',
          },
          {
            time: '11:00 AM - 11:30 AM', // Break
            monday: 'Break',
            tuesday: 'Break',
            wednesday: 'Break',
            thursday: 'Break',
            friday: 'Break',
          },
          {
            time: '11:30 AM - 12:20 PM',
            monday: 'Library Timing',
            tuesday: 'LDST(CS-251)',
            wednesday: 'Library Timing',
            thursday: 'Mathemetics (MT-002)',
            friday: 'Chinese Language (HSK 1)',
          },
          {
            time: '12:20 PM - 1:00 PM',
            monday: 'Library Timing',
            tuesday: 'LDST(CS-251)',
            wednesday: 'Library Timing',
            thursday: 'Mathemetics (MT-002)',
            friday: 'Library Timing',
          },
          {
            time: '1:00 PM - 2:00 PM', // Lunch Break
            monday: 'Lunch Break',
            tuesday: 'Lunch Break',
            wednesday: 'Lunch Break',
            thursday: 'Lunch Break',
            friday: 'Lunch Break',
          },
          {
            time: '2:00 PM - 2:50 PM',
            monday: 'OOP (CT-260)',
            tuesday: 'Library Timing',
            wednesday: 'OOP (CT-260)(Lab)',
            thursday: 'ARW (HS-115)',
            friday: 'DI (MT-171)',
          },
          {
            time: '2:50 PM - 3:40 PM',
            monday: 'OOP (CT-260)',
            tuesday: 'Library Timing',
            wednesday: 'OOP (CT-260)(Lab)',
            thursday: 'DS (CT-162)',
            friday: 'DI (MT-171)',
          },
          {
            time: '3:40 PM - 4:30 PM',
            monday: 'DS (CT-162)',
            tuesday: 'DI (MT-171)',
            wednesday: 'OOP (CT-260)(Lab)',
            thursday: 'DS (CT-162)',
            friday: '',
          },
        ]);
        
      }
      else if (department === 'department1' && semester === 'semester3') {
        setTimeTableData([
          // Data for Department 1, Semester 2
          // ...
          {
            time: '8:30 AM - 9:20 AM',
            monday: '',
            tuesday: '',
            wednesday: 'Business comunication lab (BC) (HS-218)',
            thursday: 'Data Structure Algorithms & Application lab (CT-157)',
            friday: '',
          },
          {
            time: '9:20 AM - 10:10 AM',
            monday: '',
            tuesday: '',
            wednesday: 'Business comunication lab (BC) (HS-218)',
            thursday: 'Data Structure Algorithms & Application lab (CT-157)',
            friday: '',
          },
          {
            time: '10:10 AM - 11:00 AM',
            monday: 'Data Structure Algorithms & Application (CT-157)',
            tuesday: '',
            wednesday: 'Business comunication lab (BC) (HS-218)',
            thursday: 'Data Structure Algorithms & Application lab (CT-157)',
            friday: '',
          },
          {
            time: '11:00 AM - 11:30 AM', // Break
            monday: 'Break',
            tuesday: 'Break',
            wednesday: 'Break',
            thursday: 'Break',
            friday: 'Break',
          },
          {
            time: '11:30 AM - 12:20 PM',
            monday: 'Islamic Studies(HS-205)',
            tuesday: 'System Analysis & Design (CT-259)',
            wednesday: 'Ethical Behaviour (HS-209)',
            thursday: 'chinese language (HSK-II)',
            friday: '',
          },
          {
            time: '12:20 PM - 1:00 PM',
            monday: 'Islamic Studies(HS-205)',
            tuesday: 'System Analysis & Design (CT-259)',
            wednesday: 'Ethical Behaviour (HS-209)',
            thursday: 'chinese language (HSK-II)',
            friday: '',
          },
          {
            time: '1:00 PM - 2:00 PM', // Lunch Break
            monday: 'Lunch Break',
            tuesday: 'Lunch Break',
            wednesday: 'Lunch Break',
            thursday: 'Lunch Break',
            friday: 'Lunch Break',
          },
          {
            time: '2:00 PM - 2:50 PM',
            monday: 'Business comunication lab (BC) (HS-218)',
            tuesday: 'Library Timing',
            wednesday: 'Library Timing',
            thursday: 'System Analysis & Design (CT-259)',
            friday: '',
          },
          {
            time: '2:50 PM - 3:40 PM',
            monday: 'Business comunication lab (BC) (HS-218)',
            tuesday: 'Data Structure Algorithms & Application (CT-157)',
            wednesday: 'chinese language (HSK-II)',
            thursday: 'Differential Equations (MT-227)',
            friday: '',
          },
          {
            time: '3:40 PM - 4:30 PM',
            monday: '',
            tuesday: 'Data Structure Algorithms & Application (CT-157)',
            wednesday: 'Differential Equations (MT-227)',
            thursday: 'Differential Equations (MT-227)',
            friday: '',
          },
        ]);
        
      }
      else if (department === 'department1' && semester === 'semester4') {
        setTimeTableData([
          // Data for Department 1, Semester 2
          // ...
          {
            time: '8:30 AM - 9:20 AM',
            monday: '',
            tuesday: '',
            wednesday: 'DBMS (CT-261)(Lab)',
            thursday: '',
            friday: 'CAO (CS-252)',
          },
          {
            time: '9:20 AM - 10:10 AM',
            monday: '',
            tuesday: '',
            wednesday: 'DBMS (CT-261)(Lab)',
            thursday: 'PE (HS-219)',
            friday: 'FCA (EC-209)',
          },
          {
            time: '10:10 AM - 11:00 AM',
            monday: '',
            tuesday: '',
            wednesday: 'DBMS (CT-261)(Lab)',
            thursday: 'DBMS (CT-261)',
            friday: 'FCA (EC-209)',
          },
          {
            time: '11:00 AM - 11:30 AM', // Break
            monday: 'Break',
            tuesday: 'Break',
            wednesday: 'Break',
            thursday: 'Break',
            friday: 'Break',
          },
          {
            time: '11:30 AM - 12:20 PM',
            monday: '',
            tuesday: '',
            wednesday: 'PE (HS-219)',
            thursday: 'Library timing',
            friday: 'Library timing',
          },
          {
            time: '12:20 PM - 1:00 PM',
            monday: 'DBMS (CT-261)',
            tuesday: '',
            wednesday: 'CAO (CS-252)',
            thursday: 'FCA (EC-209)',
            friday: 'LAG (MT-272)',
          },
          {
            time: '1:00 PM - 2:00 PM', // Lunch Break
            monday: 'Lunch Break',
            tuesday: 'Lunch Break',
            wednesday: 'Lunch Break',
            thursday: 'Lunch Break',
            friday: 'Lunch Break',
          },
          {
            time: '2:00 PM - 2:50 PM',
            monday: 'CAO (CS-252)(LAB)',
            tuesday: '',
            wednesday: 'CAO (CS-252)',
            thursday: 'Library Timing',
            friday: '',
          },
          {
            time: '2:50 PM - 3:40 PM',
            monday: 'CAO (CS-252)(LAB)',
            tuesday: '',
            wednesday: 'DBMS (CT-261)',
            thursday: 'CAO (CS-252)(LAB)',
            friday: '',
          },
          {
            time: '3:40 PM - 4:30 PM',
            monday: 'CAO (CS-252)(LAB)',
            tuesday: '',
            wednesday: 'Course 38',
            thursday: 'LAG (MT-272)',
            friday: '',
          },
        ]);
        
      }
      else if (department === 'department1' && semester === 'semester5') {
        setTimeTableData([
          // Data for Department 1, Semester 2
          // ...
          {
            time: '8:30 AM - 9:20 AM',
            monday: '',
            tuesday: ' softwareEngineering (SE) (CT-365)',
            wednesday: '',
            thursday: 'Theory of Automata and Formal Language (TAFL) (CT-364)',
            friday: '',
          },
          {
            time: '9:20 AM - 10:10 AM',
            monday: '',
            tuesday: ' Operating System (OS)(CT-353)',
            wednesday: 'Design and Analysis of Algorithms (DAA)(CT-363)',
            thursday: 'Design and Analysis of Algorithms (DAA)(CT-363)',
            friday: '',
          },
          {
            time: '10:10 AM - 11:00 AM',
            monday: '',
            tuesday: ' Operating System lab (OS)(CT-353)',
            wednesday: 'Design and Analysis of Algorithms (DAA)(CT-363)',
            thursday: '',
            friday: '',
          },
          {
            time: '11:00 AM - 11:30 AM', // Break
            monday: 'Break',
            tuesday: 'Break',
            wednesday: 'Break',
            thursday: 'Break',
            friday: 'Break',
          },
          {
            time: '11:30 AM - 12:20 PM',
            monday: 'softwareEngineering (SE) (CT-365)',
            tuesday: 'Operating System lab (OS)(CT-353)',
            wednesday: 'Operating System (OS)(CT-353)',
            thursday: '',
            friday: '',
          },
          {
            time: '12:20 PM - 1:00 PM',
            monday: 'softwareEngineering (SE) (CT-365)',
            tuesday: 'Operating System lab (OS)(CT-353)',
            wednesday: 'Operating System (OS)(CT-353)',
            thursday: '',
            friday: '',
          },
          {
            time: '1:00 PM - 2:00 PM', // Lunch Break
            monday: 'Lunch Break',
            tuesday: 'Lunch Break',
            wednesday: 'Lunch Break',
            thursday: 'Lunch Break',
            friday: 'Lunch Break',
          },
          {
            time: '2:00 PM - 2:50 PM',
            monday: 'Theory of Automata and Formal Language (TAFL) (CT-364)',
            tuesday: 'Library Timing',
            wednesday: '',
            thursday: '',
            friday: '',
          },
          {
            time: '2:50 PM - 3:40 PM',
            monday: 'Theory of Automata and Formal Language (TAFL) (CT-364)',
            tuesday: ' Probability & Statistic (P&S) (MT-331)',
            wednesday: '',
            thursday: '',
            friday: '',
          },
          {
            time: '3:40 PM - 4:30 PM',
            monday: ' Probability & Statistic (P&S) (MT-331)',
            tuesday: ' Probability & Statistic (P&S) (MT-331)',
            wednesday: ' ',
            thursday: '',
            friday: '',
          },
        ]);
        
      }
      else if (department === 'department1' && semester === 'semester6') {
        setTimeTableData([
          // Data for Department 1, Semester 2
          // ...
          {
            time: '8:30 AM - 9:20 AM',
            monday: 'CCN (CT-376)(Lab)',
            tuesday: 'AIES(CT-361)',
            wednesday: 'CCN (CT-376)',
            thursday: '',
            friday: '',
          },
          {
            time: '9:20 AM - 10:10 AM',
            monday: 'CCN (CT-376)(Lab)',
            tuesday: 'WE (CT-362)',
            wednesday: 'CCN (CT-376)',
            thursday: '',
            friday: '',
          },
          {
            time: '10:10 AM - 11:00 AM',
            monday: 'CCN (CT-376)(Lab)',
            tuesday: 'WE (CT-362)(Lab)',
            wednesday: 'TPL (CT-367)',
            thursday: 'WE (CT-362)',
            friday: '',
          },
          {
            time: '11:00 AM - 11:30 AM', // Break
            monday: 'Break',
            tuesday: 'Break',
            wednesday: 'Break',
            thursday: 'Break',
            friday: 'Break',
          },
          {
            time: '11:30 AM - 12:20 PM',
            monday: 'AIES(CT-361)',
            tuesday: 'WE (CT-362)(Lab)',
            wednesday: 'Library Timing',
            thursday: 'WE (CT-362)',
            friday: 'CCN (CT-376)',
          },
          {
            time: '12:20 PM - 1:00 PM',
            monday: 'AIES(CT-361)',
            tuesday: 'WE (CT-362)(Lab)',
            wednesday: 'Library Timing',
            thursday: 'Library Timing',
            friday: 'TPL (CT-367)',
          },
          {
            time: '1:00 PM - 2:00 PM', // Lunch Break
            monday: 'Lunch Break',
            tuesday: 'Lunch Break',
            wednesday: 'Lunch Break',
            thursday: 'Lunch Break',
            friday: 'Lunch Break',
          },
          {
            time: '2:00 PM - 2:50 PM',
            monday: '',
            tuesday: 'TPL (CT-367)',
            wednesday: 'Library Timing',
            thursday: 'NM (MT-442)',
            friday: 'AIES (CT-361)(Lab)',
          },
          {
            time: '2:50 PM - 3:40 PM',
            monday: '',
            tuesday: '',
            wednesday: 'NM (MT-442)',
            thursday: '',
            friday: 'AIES (CT-361)(Lab)',
          },
          {
            time: '3:40 PM - 4:30 PM',
            monday: '',
            tuesday: '',
            wednesday: 'NM (MT-442)',
            thursday: '',
            friday: 'AIES (CT-361)(Lab)',
          },
        ]);
        
      }
      else if (department === 'department1' && semester === 'semester7') {
        setTimeTableData([
          // Data for Department 1, Semester 2
          // ...
          {
            time: '8:30 AM - 9:20 AM',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
          },
          {
            time: '9:20 AM - 10:10 AM',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: 'Organizational Behaviour (OB)(MG-482)',
          },
          {
            time: '10:10 AM - 11:00 AM',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: 'Network & Information Security lab (NIS)(CT-460)',
          },
          {
            time: '11:00 AM - 11:30 AM', // Break
            monday: 'Break',
            tuesday: 'Break',
            wednesday: 'Break',
            thursday: 'Break',
            friday: 'Break',
          },
          {
            time: '11:30 AM - 12:20 PM',
            monday: '',
            tuesday: 'Network & Information Security (NIS)(CT-460)',
            wednesday: '',
            thursday: 'Organizational Behaviour (OB)(MG-482)',
            friday: 'Network & Information Security lab (NIS)(CT-460)',
          },
          {
            time: '12:20 PM - 1:00 PM',
            monday: '',
            tuesday: 'Network & Information Security (NIS)(CT-460)',
            wednesday: 'Network & Information Security (NIS)(CT-460)',
            thursday: 'Natural Language processing (NLP)(CT-485)',
            friday: 'Network & Information Security lab (NIS)(CT-460)',
          },
          {
            time: '1:00 PM - 2:00 PM', // Lunch Break
            monday: 'Lunch Break',
            tuesday: 'Lunch Break',
            wednesday: 'Lunch Break',
            thursday: 'Lunch Break',
            friday: 'Lunch Break',
          },
          {
            time: '2:00 PM - 2:50 PM',
            monday: ' Data WareHouse & Modeling (DWM)(CT-461)',
            tuesday: 'Data WareHouse & Modeling (DWM)(CT-461)',
            wednesday: 'Data WareHouse & Modeling (DWM)(CT-461)',
            thursday: 'Data WareHouse & Modeling  Lab (DWM)(CT-461)',
            friday: '',
          },
          {
            time: '2:50 PM - 3:40 PM',
            monday: 'Natural Language processing (NLP)(CT-485)',
            tuesday: '',
            wednesday: 'Organizational Behaviour (OB)(MG-482)',
            thursday: 'Data WareHouse & Modeling (DWM)(CT-461)',
            friday: '',
          },
          {
            time: '3:40 PM - 4:30 PM',
            monday: '',
            tuesday: '',
            wednesday: 'Natural Language processing (NLP)(CT-485)',
            thursday: 'Data WareHouse & Modeling (DWM)(CT-461)',
            friday: '',
          },
        ]);
        
      }
      else if (department === 'department1' && semester === 'semester8') {
        setTimeTableData([
          // Data for Department 1, Semester 2
          // ...
          {
            time: '8:30 AM - 9:20 AM',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: 'ICS (CT-484)(Lab) netash kumar',
            friday: '',
          },
          {
            time: '9:20 AM - 10:10 AM',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: 'ICS (CT-484)(Lab) Netash Kumar',
            friday: 'ICS (CT-484) Abbas Ali',
          },
          {
            time: '10:10 AM - 11:00 AM',
            monday: '',
            tuesday: 'PDP (CS-428) Anees Ahmed',
            wednesday: '',
            thursday: 'ICS (CT-484)(Lab) Abbas Ali',
            friday: 'CD (CT-465)',
          },
          {
            time: '11:00 AM - 11:30 AM', // Break
            monday: 'Break',
            tuesday: 'Break',
            wednesday: 'Break',
            thursday: 'Break',
            friday: 'Break',
          },
          {
            time: '11:30 AM - 12:20 PM',
            monday: '',
            tuesday: 'CD (CT-465)',
            wednesday: 'PDP (CS-428)',
            thursday: 'ICS (CT-484)',
            friday: 'Library Timing',
          },
          {
            time: '12:20 PM - 1:00 PM',
            monday: '',
            tuesday: 'CD (CT-465)',
            wednesday: 'PDP (CS-428)',
            thursday: 'ICS (CT-484)',
            friday: 'EP (MG-481)',
          },
          {
            time: '1:00 PM - 2:00 PM', // Lunch Break
            monday: 'Lunch Break',
            tuesday: 'Lunch Break',
            wednesday: 'Lunch Break',
            thursday: 'Lunch Break',
            friday: 'Lunch Break',
          },
          {
            time: '2:00 PM - 2:50 PM',
            monday: '',
            tuesday: 'PDP (CS-428)(Lab)',
            wednesday: '',
            thursday: 'Career Consulting',
            friday: '',
          },
          {
            time: '2:50 PM - 3:40 PM',
            monday: '',
            tuesday: 'PDP (CS-428)(Lab)',
            wednesday: '',
            thursday: 'EP (MG-481)',
            friday: '',
          },
          {
            time: '3:40 PM - 4:30 PM',
            monday: '',
            tuesday: 'PDP (CS-428)(Lab)',
            wednesday: '',
            thursday: 'EP (MG-481)',
            friday: '',
          },
        ]);
      }
    };
  
    return (
      <>
            <Teacherheader />
        <div className="time-table-container">
          <div className="select-container">
            <label>
              Department:
              <select
                className="select-dropdown"
                value={department}
                onChange={handleDepartmentChange}
              >
                <option value=''>Select Department</option>
                <option value="department1">Computer Science</option>
                
                {/* Add options for other departments */}
              </select>
            </label>
    
            <label>
              Semester:
              <select
                className="select-dropdown"
                value={semester}
                onChange={handleSemesterChange}
              >
                
                <option value=""> select semester</option>

                <option value="semester1">Semester 1</option>

                <option value="semester2">Semester 2</option>

                <option value="semester3">Semester 3</option>

                
                <option value="semester4">Semester 4</option>

                <option value="semester5">Semester 5</option>

               
                <option value="semester6">Semester 6</option>

                <option value="semester7">Semester 7</option>

                <option value="semester8">Semester 8</option>
                {/* Add options for other semesters */}
              </select>
            </label>
    
            <button className="generate-button" onClick={fetchTimeTableData}>
              view Time Table
            </button>
            <button className="print-button" onClick={togglePrint}>
            {printVisible ? 'Hide Print' : 'Print Time Table'}
          </button>
          {printVisible && (
            <button className="pdf-button" onClick={generatePDF}>
              Download as PDF
            </button>
          )}
          </div>
    
          {timeTableData && (
            <div className={`time-table${printVisible ? ' print-visible' : ''}`} ref={tableRef}>
            <table className="time-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                </tr>
              </thead>
              <tbody>
                {timeTableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.time}</td>
                    <td>{row.monday}</td>
                    <td>{row.tuesday}</td>
                    <td>{row.wednesday}</td>
                    <td>{row.thursday}</td>
                    <td>{row.friday}</td>
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

export default Generatetable;
