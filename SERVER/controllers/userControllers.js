const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.js')
const Student = require('../models/student.js')
const Admin = require('../models/admin.js')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { id, name, password, userCategory } = req.body
    if (!name || !id || !password || !userCategory) {
        res.status(400)
        throw new Error('Please fill all the fields')
    }

    // Checking if user exists
    const userExists = await User.findOne({ id })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        id,
        name,
        password: hashedPassword,
        userCategory
    })

    // If user is student then adding student details
    if (userCategory === 'student') {
        await Student.create({
            rollNumber: id,
            name,
            password: hashedPassword,
        })
    } else {
        await Admin.create({
            adminId: id,
            name,
            password: hashedPassword,
        })
    }

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            userCategory: user.userCategory,
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
    const { id, password } = req.body

    const user = await User.findOne({ id })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            userCategory: user.userCategory,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Roll number or password')
    }
})

// @desc    Getting all user details
// @route   POST /api/users/login
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}, {id:1, name:1, userCategory:1, _id:0})

    const formattedUsers = users.map(user => {
        return {
            ID: user.id,
            Name: user.name,
            'Registered as': user.userCategory
        }
    })
    res.status(200).json(formattedUsers)
})

// @desc    Getting all students
// @route   POST /api/users/login
// @access  Public
const getStudents = asyncHandler(async (req, res) => {
    const users = await User.find({ userCategory: 'student' }, { id: 1, name: 1, userCategory: 1, _id: 0 })

    const formattedStudents = users.map(user => {
        return {
            ID: user.id,
            Name: user.name,
        }
    })
    res.status(200).json(formattedStudents)
})

// @desc    Getting all students
// @route   POST /api/users/login
// @access  Public
const getAdmins = asyncHandler(async (req, res) => {
    const users = await User.find({ userCategory: 'admin' }, { id: 1, name: 1, userCategory: 1, _id: 0 })

    const formattedAdmins = users.map(user => {
        return {
            ID: user.id,
            Name: user.name,
        }
    })
    res.status(200).json(formattedAdmins)
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
    getUsers,
    getAdmins,
    getStudents,
}