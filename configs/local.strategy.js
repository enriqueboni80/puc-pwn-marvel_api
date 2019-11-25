require('dotenv').load();

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'passwd',
            session: false,
            teste: console.log('chegou aqui')
        },
        function(accessToken, refreshToken, profile, done) {
            return done(undefined, profile);
        }
    )
);

passport.serializeUser(function(user, done) {
    done(undefined, user);
});

passport.deserializeUser(function(user, done) {
    done(undefined, user);
});