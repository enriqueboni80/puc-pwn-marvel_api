var express = require('express');
var router = express.Router();
var auth = require('../helpers/ensureAuthenticated')

/* GET users listing. */
router.get('/', auth.ensureAuthenticated, function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;