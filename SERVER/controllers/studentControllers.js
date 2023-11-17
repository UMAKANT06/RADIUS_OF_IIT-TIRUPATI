const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Student = require('../models/student.js')

// @desc    Update student details
// @route   PUT /api/students
// @access  Private
const updateDetails = asyncHandler(async (req, res) => {
    const { id } = req.params.id;
    const updatedDetails = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(id, updatedDetails, {
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
    const { id } = req.params.id;
    const { password } = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const updatedStudent = await Student.findByIdAndUpdate(id, { password: hashedPassword }, {
        new: true,
        runValidators: true,
    });

    if (updatedStudent) {
        res.status(200).json(updatedStudent);
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    updateDetails,
    updatePassword,
}