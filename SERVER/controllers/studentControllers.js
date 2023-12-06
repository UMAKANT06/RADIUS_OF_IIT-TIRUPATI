const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Student = require('../models/student.js')
const User = require('../models/user.js')

// @desc    Update student details
// @route   PUT /api/students
// @access  Private
const updateDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, password, location, phoneNumber, rewards, projects, leaderBoardRank, clubs, roomNumber, ratings, appointments, techClubs, literaryClubs, sportsClubs, culturalClubs } = req.body;

    const student = await Student.findOne({ rollNumber: id });

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    const updatedStudent = await Student.findOneAndUpdate({ rollNumber: id }, {
        name,
        password,
        location,
        phoneNumber,
        techClubs,
        literaryClubs,
        sportsClubs,
        culturalClubs,
        rewards,
        projects,
        leaderBoardRank,
        clubs,
        roomNumber,
        ratings,
        appointments,
    }, {
        new: true,
        runValidators: true,
    });
    

    if (updatedStudent) {
        res.status(200).json(updatedStudent);
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

// @desc    Update student password
// @route   PUT /api/students
// @access  Private
const updatePassword = asyncHandler(async (req, res) => {
    const { id: studentID } = req.params;
    const { oldPassword, newPassword } = req.body;

    const student = await Student.findOne({ rollNumber: studentID });

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    const isMatch = await bcrypt.compare(oldPassword, student.password);

    if (!isMatch) {
        res.status(400);
        throw new Error('Invalid old password');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const updatedStudent = await Student.findOneAndUpdate({ rollNumber: studentID }, { password: hashedPassword }, {
        new: true,
        runValidators: true,
    });

    if (updatedStudent) {
        res.status(200).json(updatedStudent);
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

// @desc    Get student portfolio
// @route   GET /api/students
// @access  Public
const getStudentPortfolio = asyncHandler(async (req, res) => {
    const { id: studentID } = req.body;
    const student = await Student.findOne({ rollNumber: studentID });

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    res.status(200).json(student);
});

// @desc    Delete student
// @route   DELETE /api/students
// @access  Private
const deleteStudent = asyncHandler(async (req, res) => {
    const { studentID } = req.params.id;

    // Delete student from Student collection
    const deletedStudent = await Student.findOneAndDelete({ rollNumber: studentID });

    if (!deletedStudent) {
        res.status(404);
        throw new Error('Student not found');
    }

    // Delete student from User collection
    const deletedUser = await User.findOneAndDelete({ id: studentID });

    if (!deletedUser) {
        res.status(404);
        throw new Error('User not found');
    }

    res.status(200).json({ message: 'Student deleted successfully' });
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    updateDetails,
    updatePassword,
    getStudentPortfolio,
    deleteStudent,
}