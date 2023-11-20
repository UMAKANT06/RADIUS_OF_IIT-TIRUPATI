const asyncHandler = require('express-async-handler');
const Found = require('../models/found.js');
const Student = require('../models/student.js');

// @desc    Add new found
// @route   POST /api/found/addFound
// @access  Public
const registerFound = asyncHandler(async (req, res) => {
    const { finderRollNo, dateAndTime, itemType, itemDescription, attachments, location } = req.body;
    if (!finderRollNo || !itemType || !itemDescription || !location || !dateAndTime) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: finderRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Create Found
    const found = await Found.create({
        reporterRollNo,
        dateAndTime: dateAndTime,
        currrentStatus: "Pending",
        itemType,
        itemDescription,
        attachments,
        location,
        claimedByRollNo: "NA",
        dateReturned: "NA",
    });

    if (found) {
        res.status(201).json({
            _id: found._id,
            finderRollNo: found.finderRollNo,
            date: found.dateAndTime,
            itemType: found.itemType,
            itemDescription: found.itemDescription,
            attachments: found.attachments,
            location: found.location,
        });
    } else {
        res.status(400);
        throw new Error('Invalid found data');
    }
});

// @desc    Show all found items
// @route   GET /api/found/showAllFound
// @access  Public
const showAllFound = asyncHandler(async (req, res) => {
    const found = await Found.find({});

    const formattedfound = found.map((found) => {
        return {
            _id: found._id,
            finderRollNo: found.finderRollNo,
            date: found.dateAndTime,
            itemType: found.itemType,
            currentStatus: found.currentStatus,
            itemDescription: found.itemDescription,
            attachments: found.attachments,
            location: found.location,
            claimedByRollNo: claimedByRollNo,
            dateReturned: dateReturned,
        };
    });

    res.status(200).json(formattedfound);
});

// @desc    Show found items for a student
// @route   GET /api/found/showFound
// @access  Public
const showFound = asyncHandler(async (req, res) => {
    const { reporterRollNo } = req.body;
    if (!finderRollNo) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if student exists
    const studentExists = await Student.findOne({ rollNumber: finderRollNo });
    if (!studentExists) {
        res.status(400);
        throw new Error('Student does not exist');
    }

    // Show all found
    const found = await Found.find({ finderRollNo: finderRollNo });
    
    const formattedfound = found.map((found) => {
        return {
            _id: found._id,
            finderRollNo: found.finderRollNo,
            date: found.dateAndTime,
            itemType: found.itemType,
            currentStatus: found.currentStatus,
            itemDescription: found.itemDescription,
            attachments: found.attachments,
            location: found.location,
            claimedByRollNo: found.claimedByRollNo,
            dateReturned: found.dateReturned,
        };
    });

    res.status(200).json(formattedfound);
});

// @desc    Show one found
// @route   GET /api/found/showOneFound
// @access  Public
const showOneFound = asyncHandler(async (req, res) => {
    const { foundId } = req.body;
    if (!foundId) {
        res.status(400);
        throw new Error('Please fill all the fields')
    }

    // Show one found
    const found = await Found.findOne({ _id: foundId });

    if (!found) {
        res.status(400);
        throw new Error(`Found item with the id = ${foundId} does not exist`);
    }
    
    const formattedfound = {
        _id: found._id,
        reporterRollNo: found.reporterRollNo,
        date: found.dateAndTime,
        itemType: found.itemType,
        currentStatus: found.currentStatus,
        itemDescription: found.itemDescription,
        attachments: found.attachments,
        location: found.location,
        claimedByRollNo: found.claimedByRollNo,
        dateReturned: found.dateReturned,
    };

    res.status(200).json(formattedfound);
});

// @desc    Update found
// @route   PUT /api/found/updateFound
// @access  Public
const updateFound = asyncHandler(async (req, res) => {
    const { foundId, claimedByRollNo, dateReturned, status } = req.body;
    if (!foundId || !claimedByRollNo || !dateReturned || !status) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if the complain exists or not
    const found = await Found.findById(foundId);
    if (!found) {
        res.status(400);
        throw new Error(`Found item with id = ${foundId} does not exist`);
    }

    // Update found
    found.currentStatus = status;
    found.claimedByRollNo = claimedByRollNo;
    found.dateReturned = dateReturned;
    const updatedfound = await found.save();

    res.status(200).json({
        _id: updatedfound._id,
        reporterRollNo: updatedfound.reporterRollNo,
        date: updatedfound.dateAndTime,
        itemType: updatedfound.itemType,
        currentStatus: updatedfound.currentStatus,
        itemDescription: updatedfound.itemDescription,
        attachments: updatedfound.attachments,
        location: updatedfound.location,
        claimedByRollNo: updatedfound.claimedByRollNo,
        dateReturned: updatedfound.dateReturned,
    });
});

// @desc    Delete found
// @route   DELETE /api/found/deleteFound
// @access  Private
const deleteFound = asyncHandler(async (req, res) => {
    const { foundId } = req.body;
    if (!foundId) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }

    // Checking if the complain exists or not
    const found = await Found.findById(foundId);
    if (!found) {
        res.status(400);
        throw new Error(`Found item with the id = ${foundId} does not exist`);
    }

    // Delete lost
    const deletedFound = await found.remove();
    if (!deletedFound) {
        res.status(400);
        throw new Error('Found item could not be deleted');
    }
    
    res.status(200).json({ message: 'Found item deleted successfully' });
});

module.exports = {
    registerFound,
    showAllFound,
    showOneFound,
    showFound,
    updateFound,
    deleteFound,
}