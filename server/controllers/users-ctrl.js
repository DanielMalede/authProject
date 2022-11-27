const users = require("../model/users-model");
const validateEmail = require("../validation/validateEmail");
const bcrypt = require("bcryptjs");
const usersModel = require("../model/users-model");
const key = process.env.SECRET_KEY;

const register = async (req, res) => {
  bcrypt.genSalt().then((salt) => {
    bcrypt
      .hash(req.body.user.password, salt)
      .then((hashPassword) => {
        req.body.user.password = hashPassword;
        usersModel
          .insertMany(req.body.user)
          .then(() => {
            res.send("success");
          })
          .catch((err) => res.send(err));
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getUsers = async (req, res) => {
  await users.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "no data" });
    }
    if (result) {
      return res.status(200).json({ success: true, message: result });
    }
  });
};

const newUsers = async (req, res) => {
  await users
    .insertMany(req.body.data)
    .then(() => res.status(200).json({ success: true, message: "user added" }))
    .catch((error) => res.status(400).json({ success: false, error }));
};
module.exports = {
  getUsers,
  newUsers,
  register
};
