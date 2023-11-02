const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUserDetails, getUserProfile } = require('../controllers/userControllers.js')
const { protect } = require('../middleware/authMiddleware.js')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getUser', protect, getUserDetails)
router.get('/getUserProfile', protect, getUserProfile)

module.exports = router