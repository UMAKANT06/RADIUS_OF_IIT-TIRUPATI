const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware.js');
const { registerFound, showAllFound, showOneFound, showFound, updateFound, deleteFound } = require('../controllers/foundControllers.js');

router.post('/addFound', protect, registerFound);
router.get('/showAllFound', protect, showAllFound);
router.get('/showOneFound', protect, showOneFound);
router.get('/showFound', showFound);
router.put('/updateFound', updateFound);
router.delete('/deleteFound', protect, deleteFound);

module.exports = router;