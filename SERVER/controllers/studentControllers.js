const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Student = require('../models/student.js')

// @desc    Update student details
// @route   PUT /api/students
// @access  Private
const updateDetails = asyncHandler(async (req, res) => {

})

const updatePassword = asyncHandler(async (req, res) => {

})

module.exports = {
    updateDetails,
    updatePassword,
}