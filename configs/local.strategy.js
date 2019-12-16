require('dotenv').load();

var User = require("../store/Users")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        User.auth(email, password).then(function(user, err) {
            if (user.length <= 0) {
                return done(null, false, { message: 'Username or Password are incorrect' });
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