const User = require('../models/user')

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const AppleStrategy = require('passport-apple').Strategy;

passport.use(new GoogleStrategy({
    clientID: '799450234572-uqmu9v25n98mgaij0draoltbpk542t35.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    // Find or create user in your database here
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      return cb(null, existingUser);
    }

    const newUser = new User({
      googleId: profile.id,
      username: profile.displayName,
      // add any other details you want from profile
    });

    await newUser.save();

    return cb(null, newUser);
  }
));

// passport.use(new AppleStrategy({
//     clientID: YOUR_APPLE_CLIENT_ID,
//     teamID: YOUR_APPLE_TEAM_ID,
//     callbackURL: "/auth/apple/callback",
//     keyID: YOUR_APPLE_KEY_ID,
//     privateKeyLocation: YOUR_APPLE_PRIVATE_KEY_LOCATION
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     // Find or create user in your database here
//     return cb(null, profile);
//   }
// ));
