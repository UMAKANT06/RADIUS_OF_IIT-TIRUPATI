const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware.js');
const { registerLost, showLost, updateLost, deleteLost, showOneLost, showAllLost } = require('../controllers/lostControllers.js');

router.post('/addLost', registerLost);
router.get('/showLost', showLost);
router.get('/showOneLost', showOneLost);
router.put('/updateLost', updateLost);
router.delete('/deleteLost', protect, deleteLost);
router.get('/showAllLost', showAllLost)

module.exports = router;