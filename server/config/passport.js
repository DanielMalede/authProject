const keys = require("./keys");
const userModel = require("../model/users-model");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const options = {
  secretOrKey: keys.secretKey,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
const passport = (passport) => {
  passport.use(
    new jwtStrategy(options, (jwt_payload, done) => {
      userModel
        .findById(jwt_payload.id)
        .then((users) => {
          console.log("user found");
          return done(null, false);
        })
        .catch((error) => {
          console.log(error);
          return done(error);
        });
    })
  )
};
module.exports = passport
