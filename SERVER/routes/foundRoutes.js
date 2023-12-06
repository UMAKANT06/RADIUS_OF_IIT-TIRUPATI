const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware.js');
const { registerFound, showAllFound, showOneFound, showFound, updateFound, deleteFound } = require('../controllers/foundControllers.js');

router.post('/addFound', registerFound);
router.get('/showAllFound', showAllFound);
router.get('/showOneFound', showOneFound);
router.get('/showFound', showFound);
router.put('/updateFound', updateFound);
router.delete('/deleteFound', protect, deleteFound);

module.exports = router;