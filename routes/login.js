const express = require('express');
const router = express.Router();
var login = require('../controllers/loginController')

router.get('/', login.create);

module.exports = router;