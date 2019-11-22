require('dotenv').load();

const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
    new GitHubStrategy({
            clientID: process.env.GIT_API_CLIENT_ID,
            clientSecret: process.env.GIT_API_CLIENT_SECRET,
            callbackURL: process.env.GIT_API_CALLBACK_URL
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