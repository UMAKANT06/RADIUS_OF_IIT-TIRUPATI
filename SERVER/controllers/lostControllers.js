const asyncHandler = require('express-async-handler');
const Student = require('../models/student.js');
const Lost = require('../models/lost.js');

// @desc    Add new lost
// @route   POST /api/lost/addLost
// @access  Public
const registerLost = asyncHandler(async (req, res) => {
    const { reporterRollNo, itemType, itemDescription, attachments, location } = req.body;
    if (!reporterRollNo || !itemType || !itemDescription) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: reporterRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Create lost
    const lost = await Lost.create({
        reporterRollNo,
        itemType,
        itemDescription,
        attachments,
        location,
    });

    if (lost) {
        res.status(201).json({
            _id: lost._id,
            reporterRollNo: lost.reporterRollNo,
            date: lost.dateAndTime,
            itemType: lost.itemType,
            itemDescription: lost.itemDescription,
            attachments: lost.attachments,
            location: lost.location,
        });
    } else {
        res.status(400);
        throw new Error('Invalid lost data');
    }
});

// @desc    Show all lost of a student
// @route   GET /api/lost/showLost
// @access  Public
const showLost = asyncHandler(async (req, res) => {
    const { reporterRollNo } = req.body;
    if (!reporterRollNo) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: reporterRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Show all lost
    const lost = await Lost.find({ reporterRollNo: reporterRollNo });
    
    const formattedlost = lost.map((lost) => {
        return {
            _id: lost._id,
            reporterRollNo: lost.reporterRollNo,
            date: lost.dateAndTime,
            itemType: lost.itemType,
            currentStatus: lost.currentStatus,
            itemDescription: lost.itemDescription,
            attachments: lost.attachments,
            location: lost.location,
        };
    });

    res.status(200).json(formattedlost);
});

// @desc    Show all lost
// @route   GET /api/lost/showAllLost
// @access  Public
const showAllLost = asyncHandler(async (req, res) => {
    const lost = await Lost.find({});
    
    const formattedlost = lost.map((lost) => {
        return {
            _id: lost._id,
            reporterRollNo: lost.reporterRollNo,
            date: lost.dateAndTime,
            itemType: lost.itemType,
            currentStatus: lost.currentStatus,
            itemDescription: lost.itemDescription,
            attachments: lost.attachments,
            location: lost.location,
        };
    });

    res.status(200).json(formattedlost);
});

// @desc    Show one lost
// @route   GET /api/lost/showOneLost
// @access  Public
const showOneLost = asyncHandler(async (req, res) => {
    const { lostId } = req.body;
    if (!lostId) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Show one lost
    const lost = await Lost.findOne({ _id: lostId });

    if (!lost) {
        res.status(400);
        throw new Error(`Lost item with the id = ${lostId} does not exist`);
    }
    
    const formattedlost = {
        _id: lost._id,
        reporterRollNo: lost.reporterRollNo,
        date: lost.dateAndTime,
        itemType: lost.itemType,
        currentStatus: lost.currentStatus,
        itemDescription: lost.itemDescription,
        attachments: lost.attachments,
        location: lost.location,
    };

    res.status(200).json(formattedlost);
});

// @desc    Update lost
// @route   PUT /api/lost/updateLost
// @access  Public
const updateLost = asyncHandler(async (req, res) => {
    const { lostId, status } = req.body;
    if (!lostId || !status) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if the complain exists or not
    const lost = await Lost.findById(lostId);
    if (!lost) {
        res.status(400);
        throw new Error(`Lost item with the id = ${lostId} does not exist`);
    }

    // Update lost
    lost.currentStatus = status;
    const updatedlost = await lost.save();

    res.status(200).json({
        _id: updatedlost._id,
        reporterRollNo: updatedlost.reporterRollNo,
        date: updatedlost.dateAndTime,
        itemType: updatedlost.itemType,
        itemDescription: updatedlost.itemDescription,
        status,
        attachments: updatedlost.attachments,
        location: updatedlost.location,
    });
});

// @desc    Delete lost
// @route   DELETE /api/lost/deleteLost
// @access  Public
const deleteLost = asyncHandler(async (req, res) => {
    const { lostId } = req.body;
    if (!lostId) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if the complain exists or not
    let lost;
    try {
        lost = await Lost.findById(lostId);
    } catch (error) {
        res.status(400);
        throw new Error(`Lost item with the id = ${lostId} does not exist`);
    }
    if (!lost) {
        res.status(400);
        throw new Error(`Lost item with the id = ${lostId} does not exist`);
    }

    // Delete lost
    const deletedLost = await Lost.findOneAndDelete({ _id: lostId });
    if (!deletedLost) {
        res.status(400);
        throw new Error('Lost item could not be deleted');
    }
    
    res.status(200).json({ message: 'Lost item deleted successfully' });
});

module.exports = {
    registerLost,
    showLost,
    showOneLost,
    updateLost,
    deleteLost,
    showAllLost,
}