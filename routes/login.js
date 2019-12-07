const express = require('express');
const router = express.Router();
var login = require('../controllers/loginController')

router.get('/', login);

module.exports = router;