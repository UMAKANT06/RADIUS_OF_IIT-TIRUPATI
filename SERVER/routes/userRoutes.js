const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUsers, getStudents, getAdmins, deleteUser} = require('../controllers/userControllers.js')
const { protect } = require('../middleware/authMiddleware.js')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getUser', getUsers)
router.get('/getStudent', getStudents)
router.get('/getAdmin', getAdmins)
router.delete('/:id', protect, deleteUser)

module.exports = router