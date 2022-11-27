const keys = require("./keys");
const userModel = require("../model/users-model");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  passport.use(
    new jwtStrategy(
      {
        secretOrKey: keys.secretKey,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      },
      () => {}
    )
  );
};
