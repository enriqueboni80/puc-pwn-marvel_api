const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const env = require("../env")

passport.use(
    new GitHubStrategy({
            clientID: env.git_api_clientID,
            clientSecret: env.git_api_clientSecret,
            callbackURL: env.git_api_callbackURL
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