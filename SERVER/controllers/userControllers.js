const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.js')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, rollNumber, password, location, phoneNumber, interests, rewards, projects, leaderboardRank, clubs, roomNumber, ratings, appointments } = req.body
    if (!name || !rollNumber || !password || !location || !phoneNumber || !interests || !rewards || !projects || !leaderboardRank || !clubs || !roomNumber || !ratings || !appointments) {
        res.status(400)
        throw new Error('Please fill all the fields')
    }

    // Checking if user exists
    const userExists = await User.findOne({rollNumber})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        rollNumber,
        password: hashedPassword,
        location,
        phoneNumber,
        interests,
        rewards,
        projects,
        leaderboardRank,
        clubs,
        roomNumber,
        ratings,
        appointments
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            rollNumber: user.rollNumber,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { rollNumber, password } = req.body

    const user = await User.findOne({ rollNumber })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            rollNumber: user.rollNumber,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Roll number or password')
    }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Private
const getUserDetails = asyncHandler(async (req, res) => {
    const { _id, name, rollNumber } = await User.findById(req.user._id)

    res.status(200).json({
        id: _id,
        name,
        rollNumber
    })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUserDetails,
    getUserProfile,
}