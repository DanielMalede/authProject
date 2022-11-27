const keys = require("./keys");
const userModel = require("../model/users-model");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const options = {
  secretOrKey: keys.secretKey,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
module.exports = (passport) => {
  passport.use(new jwtStrategy(options, () => {}));
};
