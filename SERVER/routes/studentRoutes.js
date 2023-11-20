const express = require('express')
const router = express.Router()
const { updateDetails, updatePassword, getStudentPortfolio, deleteStudent } = require('../controllers/studentControllers.js')
const { protect } = require('../middleware/authMiddleware.js')

router.put('/:id/update', protect, updateDetails)
router.put('/:id/password', protect, updatePassword)
router.get('/portfolio', getStudentPortfolio)
router.delete('/:id/delete', protect, deleteStudent)

module.exports = router