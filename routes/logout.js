const express = require('express');
const router = express.Router();
var logout = require('../controllers/logoutController')

router.get('/', logout);

module.exports = router;