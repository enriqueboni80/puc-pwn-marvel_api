require('dotenv').load();

var User = require("../store/Users")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(username, password, done) {
        User.auth(username, password).then(function(user, err) {
            if (user.length <= 0) {
                console.log('nao autenticou')
                return done(null, false, { message: 'Incorrect username.' });
            }
            return done(null, user);
        })
    }
));

passport.serializeUser(function(user, done) {
    done(undefined, user);
});

passport.deserializeUser(function(user, done) {
    done(undefined, user);
});