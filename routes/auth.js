var express = require('express');
var router = express.Router();
var passport = require('passport')
var User = require("../store/Users")


router.post('/', function(req, res) {
    user = {
        email: req.body.email,
        password: req.body.password
    }
    User.auth(user).then(userAutenticado => {
        console.log(userAutenticado)
    })
})

router.get('/github',
    passport.authenticate('github'));
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/users');
    });

module.exports = router;