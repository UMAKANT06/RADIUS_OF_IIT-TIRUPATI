const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware.js');
const { registerComplaint, showOneComplaint, showComplaint, deleteComplaint, updateComplaint } = require('../controllers/complaintControllers.js');

router.post('/addComplaint', registerComplaint);
router.get('/showOneComplaint', showOneComplaint);
router.get('/showComplaint', showComplaint);
router.delete('/deleteComplaint', protect, deleteComplaint);
router.put('/updateComplaint', updateComplaint);

module.exports = router;