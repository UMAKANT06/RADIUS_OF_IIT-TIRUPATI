const express = require('express')
const router = express.Router()
const { updateDetails, updatePassword, getAdminPortfolio, deleteAdmin, updateStudent, deleteStudent } = require('../controllers/adminControllers.js')
const { protect } = require('../middleware/authMiddleware.js')

router.put('/:id/update', protect, updateDetails)
router.put('/:id/password', protect, updatePassword)
router.get('/portfolio', getAdminPortfolio)
router.delete('/:id/delete', protect, deleteAdmin)
router.put('/updateStudent', protect, updateStudent)
router.delete('/deleteStudent', protect, deleteStudent)

module.exports = router