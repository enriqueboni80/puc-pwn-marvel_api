var express = require('express');
var router = express.Router();
var index = require('../controllers/indexController')
var login = require('../controllers/loginController')

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('login')
});

module.exports = router;