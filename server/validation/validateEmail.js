const emailValidator = (res, email) => {
  const temp = email.indexOf("@");
  const last = email.slice(email.length - 4);
  if (temp > 0 && last == ".com") {
    return true;
  }
  // res.send("email has to be with @ and .com");
  return false;
};
module.exports = { emailValidator };
