// // import React from 'react';
// // import axios from 'axios';
// // MyForm.js

// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './complainForm.css';

// const hostelOptions = ['A', 'B', 'C', 'D', 'E', 'F'];
// const complaintOptions = ['Type A', 'Type B', 'Type C', 'Type D', 'Type E', 'Type F'];

// const MyForm = () => {
//   const validationSchema = Yup.object().shape({
//     studentName: Yup.string().required('required'),
//     rollNo: Yup.string().required('required'),
//     date: Yup.date().required('required'),
//     hostelName: Yup.string().required('required'),
//     Complainttype: Yup.string().required('required'),
//     complaintDescription: Yup.string().required('required'),
//   });

//   const initialValues = {
//     studentName: '',
//     rollNo: '',
//     date: '',
//     hostelName: '',
//     Complainttype: '',
//     complaintDescription: '',
//   };

//   const onSubmit = (values) => {
//     console.log('Form submitted:', values);
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

//   return (
//     <div className="complaint-form-container">
//       <h2>Complaint Form</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="studentName">Student Name:</label>
//           <input
//             type="text"
//             id="studentName"
//             name="studentName"
//             value={formik.values.studentName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.studentName && formik.errors.studentName ? (
//             <div className="error">{formik.errors.studentName}</div>
//           ) : null}
//         </div>

//         <div className="form-group">
//           <label htmlFor="rollNo">Roll No:</label>
//           <input
//             type="text"
//             id="rollNo"
//             name="rollNo"
//             value={formik.values.rollNo}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.rollNo && formik.errors.rollNo ? (
//             <div className="error">{formik.errors.rollNo}</div>
//           ) : null}
//         </div>

//         <div className="form-group">
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formik.values.date}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.date && formik.errors.date ? (
//             <div className="error">{formik.errors.date}</div>
//           ) : null}
//         </div>

//         <div className="form-group">
//           <label htmlFor="hostelName">Hostel Name:</label>
//           <select
//             id="hostelName"
//             name="hostelName"
//             value={formik.values.hostelName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           >
//             <option value="">Select Hostel</option>
//             {hostelOptions.map((hostel, index) => (
//               <option key={index} value={hostel}>
//                 {hostel}
//               </option>
//             ))}
//           </select>
//           {formik.touched.hostelName && formik.errors.hostelName ? (
//             <div className="error">{formik.errors.hostelName}</div>
//           ) : null}
//         </div>

//         <div className="form-group">
//           <label htmlFor="Complainttype">Complaint Type:</label>
//           <select
//             id="Complainttype"
//             name="Complainttype"
//             value={formik.values.Complainttype}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           >
//             <option value="">Select Complaint Type</option>
//             {complaintOptions.map((complaint, index) => (
//               <option key={index} value={complaint}>
//                 {complaint}
//               </option>
//             ))}
//           </select>
//           {formik.touched.Complainttype && formik.errors.Complainttype ? (
//             <div className="error">{formik.errors.Complainttype}</div>
//           ) : null}
//         </div>

//         <div className="form-group">
//           <label htmlFor="complaintDescription">Complaint Description:</label>
//           <textarea
//             id="complaintDescription"
//             name="complaintDescription"
//             value={formik.values.complaintDescription}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.complaintDescription && formik.errors.complaintDescription ? (
//             <div className="error">{formik.errors.complaintDescription}</div>
//           ) : null}
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MyForm;


// // const ComplainForm = () => {
// //   const formik = useFormik({
// //     initialValues: {
// //       complainerRollNo: '',
// //       date: '',
// //       complainType: '',
// //       complaint: '',
// //       attachments: [],
// //       hostelOrPlace: '',
// //     },
// //     onSubmit: async (values) => {
// //       try {
// //         const response = await axios.post('/api/complaints/addComplaint', values);
// //         console.log(response.data);
// //         // Handle success or show a success message to the user
// //       } catch (error) {
// //         console.error(error);
// //         // Handle error or show an error message to the user
// //       }
// //     },
// //   });

// //   return (
// //     <div>
// //       <h1>Complaint Form</h1>
// //       <form onSubmit={formik.handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="complainerRollNo">Roll No:</label>
// //           <input
// //             type="text"
// //             id="complainerRollNo"
// //             name="complainerRollNo"
// //             value={formik.values.complainerRollNo}
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //           />
// //           {formik.touched.complainerRollNo && formik.errors.complainerRollNo ? (
// //             <div className="error">{formik.errors.complainerRollNo}</div>
// //           ) : null}
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="date">Date:</label>
// //           <input
// //             type="date"
// //             id="date"
// //             name="date"
// //             value={formik.values.date}
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //           />
// //           {formik.touched.date && formik.errors.date ? (
// //             <div className="error">{formik.errors.date}</div>
// //           ) : null}
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="complainType">Complaint Type:</label>
// //           <input
// //             type="text"
// //             id="complainType"
// //             name="complainType"
// //             value={formik.values.complainType}
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //           />
// //           {formik.touched.complainType && formik.errors.complainType ? (
// //             <div className="error">{formik.errors.complainType}</div>
// //           ) : null}
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="complaint">Complaint:</label>
// //           <textarea
// //             id="complaint"
// //             name="complaint"
// //             value={formik.values.complaint}
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //           />
// //           {formik.touched.complaint && formik.errors.complaint ? (
// //             <div className="error">{formik.errors.complaint}</div>
// //           ) : null}
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="attachments">Attachments:</label>
// //           <input
// //             type="file"
// //             id="attachments"
// //             name="attachments"
// //             multiple
// //             onChange={(event) => {
// //               formik.setFieldValue('attachments', event.target.files);
// //             }}
// //           />
// //           {formik.touched.attachments && formik.errors.attachments ? (
// //             <div className="error">{formik.errors.attachments}</div>
// //           ) : null}
// //         </div>

// //         <div className="form-group">
// //           <label htmlFor="hostelOrPlace">Hostel Name or Place:</label>
// //           <input
// //             type="text"
// //             id="hostelOrPlace"
// //             name="hostelOrPlace"
// //             value={formik.values.hostelOrPlace}
// //             onChange={formik.handleChange}
// //             onBlur={formik.handleBlur}
// //           />
// //           {formik.touched.hostelOrPlace && formik.errors.hostelOrPlace ? (
// //             <div className="error">{formik.errors.hostelOrPlace}</div>
// //           ) : null}
// //         </div>

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ComplainForm;

import React, { useState } from 'react';
import styles from './Login_signup.css';
// import { useNavigate } from 'react-router-dom';

const Login = ({ onSignupClick, onLoginSuccess }) => {
    // const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignupClick = async (e) => {
        try {
            // navigate('/Signup');
            onSignupClick();
        } catch (error) {
            console.error('Signup failed. Please check your credentials.');
            setError('Signup failed. Please check your credentials and try again.');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!userId || !password) {
            setError('Please enter both user ID and password.');
            return;
        }

        // Clear any previous errors
        setError('');

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: userId, password }),
            });

            if (response.ok) {
                // Assuming the server returns an authentication token
                const data = await response.json();
                const authToken = data.token;

                // Now you can handle the successful login, e.g., redirect to another page
                console.log('Login successful. Auth Token:', authToken);
                // navigate('/App');
                onLoginSuccess();
            } else {
                // Handle authentication failure
                console.error('Login failed. Please check your credentials.');
                setError('Invalid user ID or password. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <div className="Heading">
                <img src="https://iittp.ac.in/icissconf/images/iit-tirupati_Logo.png" alt="IIT logo" />
                <h1>RADIUS OF IIT TIRUPATI</h1>
            </div>
            <div className="container">
                <div className="loginBody">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>User ID:</label>
                            <input type="text" value={userId} onChange={handleUserIdChange}  placeholder="8 characters only (e.g. AB01C234)" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit">Login</button>
                    </form>
                </div>
                <img src="../assets/webpage.png" alt="Webpage image" />
            </div>
            <span>Don't have an account? <p onClick={handleSignupClick}>Sign Up</p></span>
        </div>
    );
};

export default Login;