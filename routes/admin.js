var express = require('express');
var router = express.Router();
var auth = require('../helpers/ensureAuthenticated')
var admin = require('../controllers/adminController')


/* GET users listing. */
router.get('/users', auth.ensureAuthenticated, admin.getAllUsers);

module.exports = router;