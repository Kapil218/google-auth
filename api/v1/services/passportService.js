import passport from "passport";
import pkg from "passport-google-oauth20";

const GoogleStrategy = pkg.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (request, accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

export default passport;
