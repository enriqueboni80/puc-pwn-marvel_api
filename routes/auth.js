var express = require('express');
var router = express.Router();
var passport = require('passport')


router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            console.log('aqui')
            return next(err);
        }
        if (!user) {
            req.flash('flashInfo', info.message)
            return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if (err) {
                console.log('aqu3')
                return next(err);
            }
            return res.redirect('/user');
        });
    })(req, res, next);
});


router.get('/github',
    passport.authenticate('github'));
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/user/store-social-network');
    });

module.exports = router;