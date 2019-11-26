var express = require('express');
var router = express.Router();
var passport = require('passport')

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/login'
    })
);

router.get('/github',
    passport.authenticate('github'));
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/users');
    });

module.exports = router;