var express = require('express');
var usercontroller = require('../controllers/userController')
var router = express.Router();
router.route('user/findOne/:name').get(usercontroller.findOneUserController);
module.exports= router;