const validator = require("validator");
const validationPassword = (res, password, valPassword) => {
  if (password == valPassword) {
    return true;
  }
  // res.send("password are not the same");
  return false;
};

module.exports = { validationPassword };
