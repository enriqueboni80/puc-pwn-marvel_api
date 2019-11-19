var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        // req.user is available for use here
        return next();
    }
    // denied. redirect to login
    res.redirect('/')
}

/* GET users listing. */
router.get('/', ensureAuthenticated, function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;