const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Student = require('../models/student.js');
const Complain = require('../models/complain.js');

// @desc    Add new complaint
// @route   POST /api/complaints/addComplaint
// @access  Public
const registerComplaint = asyncHandler(async (req, res) => {
    const { complainerRollNo, complainType, complaint, attachments, hostelOrPlace } = req.body;
    if (!complainerRollNo || !complainType || !complaint || !hostelOrPlace) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: complainerRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Create complaint
    const complain = await Complain.create({
        complainerRollNo,
        currrentStatusCompalin: "Pending",
        complainType,
        complaint,
        attachments,
        hostelOrPlace,
    });

    if (complain) {
        res.status(201).json({
            _id: complain._id,
            complainerRollNo: complain.complainerRollNo,
            date: complain.date,
            complainType: complain.complainType,
            complaint: complain.complaint,
            attachments: complain.attachments,
            hostelOrPlace: complain.hostelOrPlace,
        });
    } else {
        res.status(400);
        throw new Error('Invalid complaint data');
    }
});

// @desc    Show complaints of a student
// @route   GET /api/complaints/showComplaint
// @access  Public
const showComplaint = asyncHandler(async (req, res) => {
    const { complainerRollNo } = req.body;
    if (!complainerRollNo) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: complainerRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Find all complaints of the given student
    const complaints = await Complain.find({ complainerRollNo });

    const formattedComplaints = complaints.map(complaint => ({
        _id: complaint._id,
        complainerRollNo: complaint.complainerRollNo,
        date: complaint.date,
        complainType: complaint.complainType,
        complaint: complaint.complaint,
        attachments: complaint.attachments,
        hostelOrPlace: complaint.hostelOrPlace,
    }));

    res.status(200).json(formattedComplaints);
});

// @desc    Show one complaint status
// @route   GET /api/complaints/showOneComplaint
// @access  Public
const showOneComplaint = asyncHandler(async (req, res) => {
    const { complainerRollNo, complaintId } = req.body;
    if (!complainerRollNo || !complaintId) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: complainerRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Find all complaints of the given student
    const complaint = await Complain.findOne({ complainerRollNo, _id: complaintId });

    res.status(200).json(complaint);
});

// @desc    Delete complaint
// @route   GET /api/complaints/DeleteComplaint
// @access  Private
const deleteComplaint = asyncHandler(async (req, res) => {
    const { complainerRollNo, complaintId } = req.body;
    if (!complainerRollNo || !complaintId) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: complainerRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Checking if complaint exist
    let complaint;
    try {
        complaint = await Complain.findOne({ complainerRollNo, _id: complaintId });
    } catch (error) {
        res.status(400);
        throw new Error('Complaint does not exist');
    }

    if (!complaint) {
        res.status(400);
        throw new Error('Complaint does not exist');
    }

    // Delete complaint
    const deletedComplaint = await Complain.findOneAndDelete({ complainerRollNo, _id: complaintId });
    if (!deletedComplaint) {
        res.status(400);
        throw new Error('Complaint could not be deleted');
    }
    
    res.status(200).json({ message: 'Complaint deleted successfully' });
});

// @desc    Update complaint
// @route   GET /api/complaints/updateComplaint
// @access  Public
const updateComplaint = asyncHandler(async (req, res) => {
    const { complainerRollNo, complaintId, status} = req.body;
    if (!complainerRollNo || !complaintId || !status) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: complainerRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Find all complaints of the given student
    const complain = await Complain.findOne({ complainerRollNo, _id: complaintId });

    if (!complain) {
        res.status(400);
        throw new Error('Complaint does not exist');
    }

    complain.currentStatusComplain = status;

    const updatedComplaint = await complain.save();

    res.status(200).json({
        _id: updatedComplaint._id,
        complainerRollNo: updatedComplaint.complainerRollNo,
        date: updatedComplaint.date,
        complainType: updatedComplaint.complainType,
        complaint: updatedComplaint.complaint,
        attachments: updatedComplaint.attachments,
        hostelOrPlace: updatedComplaint.hostelOrPlace,
        status
    });
});

module.exports = {
    registerComplaint,
    showComplaint,
    showOneComplaint,
    deleteComplaint,
    updateComplaint,
}