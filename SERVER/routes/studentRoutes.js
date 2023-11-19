const express = require('express')
const router = express.Router()
const { updateDetails, updatePassword} = require('../controllers/studentControllers.js')
const { protect } = require('../middleware/authMiddleware.js')

router.put('/', protect, updateDetails)
router.put('/password', protect, updatePassword)

module.exports = router