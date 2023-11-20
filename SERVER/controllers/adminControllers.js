const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user.js');
const Admin = require('../models/admin.js');
const Student = require('../models/student.js');

// @desc    Update admin details
// @route   PUT /api/admins
// @access  Private
const updateDetails = asyncHandler(async (req, res) => {
    const { adminId } = req.params.id;

    // Find the admin by adminID
    const admin = await Admin.findOne({ adminId });

    if (!admin) {
        res.status(404)
        throw new Error('Admin not found')
    }

    // Update the admin details
    admin.name = req.body.name || admin.name;
    admin.phoneNumber = req.body.phoneNumber || admin.phoneNumber;

    // Save the updated admin
    const updatedAdmin = await admin.save();

    res.status(200).json({
        'Success': true,
        'Updated data': updatedAdmin,
    })
});

// @desc    Update admin password
// @route   PUT /api/admins
// @access  Private
const updatePassword = asyncHandler(async (req, res) => {
    const { adminId } = req.params.id;
    const { currentPassword, newPassword } = req.body;

    // Find the admin by adminID
    const admin = await Admin.findOne({ adminId });

    if (!admin) {
        res.status(404);
        throw new Error('Admin not found');
    }

    // Check if the current password matches
    const isMatch = await bcrypt.compare(currentPassword, admin.password);

    if (!isMatch) {
        res.status(400);
        throw new Error('Invalid current password');
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the admin password
    admin.password = hashedPassword;

    // Save the updated admin
    const updatedAdmin = await admin.save();

    res.status(200).json({
        Success: true,
        UpdatedData: updatedAdmin,
    });
});

// @desc    Get admin portfolio
// @route   PGET /api/admins
// @access  Public
const getAdminPortfolio = asyncHandler(async (req, res) => {
    const { adminId } = req.body;

    // Find the admin by adminID
    const admin = await Admin.findOne({ adminId });

    if (!admin) {
        res.status(404);
        throw new Error('Admin not found');
    }

    res.status(200).json(admin);
});

// @desc    Delete admin
// @route   DELETE /api/admins
// @access  Private
const deleteAdmin = asyncHandler(async (req, res) => {
    const { adminId } = req.params.id;

    const deletedAdmin = await Admin.findOneAndDelete({ adminId });

    if (!deletedAdmin) {
        res.status(404);
        throw new Error('Admin not found');
    }

    const deletedUser = await User.findOneAndDelete({ id: adminId });

    if (!deletedUser) {
        res.status(404);
        throw new Error('User not found');
    }

    res.status(200).json({ message: 'Admin deleted successfully'})
});

// @desc    Update student details
// @route   PUT /api/admins
// @access  Private
const updateStudent = asyncHandler(async (req, res) => {
    const { studentId, updatedData } = req.body;

    // Updating the student details
    const updatedStudent = await Student.findOneAndUpdate({ rollNumber: studentId }, updatedData, {
        new: true,
        runValidators: true,
    });

    if (!updatedStudent) {
        res.status(404);
        throw new Error('Student not found');
    }

    res.status(200).json(updatedStudent);
});

// @desc    Delete student
// @route   DELETE /api/students
// @access  Private
const deleteStudent = asyncHandler(async (req, res) => {
    const { studentId } = req.body;

    // Delete student from Student collection
    const deletedStudent = await Student.findOneAndDelete({ rollNumber: studentId });

    if (!deletedStudent) {
        res.status(404);
        throw new Error('Student not found');
    }

    // Delete student from User collection
    const deletedUser = await User.findOneAndDelete({ id: studentId });

    if (!deletedUser) {
        res.status(404);
        throw new Error('User not found');
    }

    res.status(200).json({ message: 'Student deleted successfully' });
});

module.exports = {
    updateDetails,
    updatePassword,
    getAdminPortfolio,
    deleteAdmin,
    updateStudent,
    deleteStudent,
}