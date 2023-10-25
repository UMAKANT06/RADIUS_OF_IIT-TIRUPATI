// complaintForm.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './complaintForm.css';

const hostelOptions = ['A', 'B', 'C', 'D', 'E', 'F'];
const complaintOptions = ['Type A', 'Type B', 'Type C', 'Type D', 'Type E', 'Type F'];

const complaintForm = () => {
  const validationSchema = Yup.object().shape({
    studentName: Yup.string().required('required'),
    rollNo: Yup.string().required('required'),
    date: Yup.date().required('required'),
    hostelName: Yup.string().required('required'),
    Complainttype: Yup.string().required('required'),
    complaintDescription: Yup.string().required('required'),
  });

  const initialValues = {
    studentName: '',
    rollNo: '',
    date: '',
    hostelName: '',
    Complainttype: '',
    complaintDescription: '',
  };

  const onSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="complaint-form-container">
      <h2>Complaint Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formik.values.studentName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.studentName && formik.errors.studentName ? (
            <div className="error">{formik.errors.studentName}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="rollNo">Roll No:</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formik.values.rollNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.rollNo && formik.errors.rollNo ? (
            <div className="error">{formik.errors.rollNo}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="hostelName">Hostel Name:</label>
          <select
            id="hostelName"
            name="hostelName"
            value={formik.values.hostelName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Hostel</option>
            {hostelOptions.map((hostel, index) => (
              <option key={index} value={hostel}>
                {hostel}
              </option>
            ))}
          </select>
          {formik.touched.hostelName && formik.errors.hostelName ? (
            <div className="error">{formik.errors.hostelName}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="Complainttype">Complaint Type:</label>
          <select
            id="Complainttype"
            name="Complainttype"
            value={formik.values.Complainttype}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Complaint Type</option>
            {complaintOptions.map((complaint, index) => (
              <option key={index} value={complaint}>
                {complaint}
              </option>
            ))}
          </select>
          {formik.touched.Complainttype && formik.errors.Complainttype ? (
            <div className="error">{formik.errors.Complainttype}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="complaintDescription">Complaint Description:</label>
          <textarea
            id="complaintDescription"
            name="complaintDescription"
            value={formik.values.complaintDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.complaintDescription && formik.errors.complaintDescription ? (
            <div className="error">{formik.errors.complaintDescription}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default complaintForm;

