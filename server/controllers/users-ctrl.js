const users = require("../model/users-model");

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

const newUsers =async (req,res)=>{
    await users
    .insertMany(req.body.data)
    .then(() =>
      res.status(200).json({ success: true, message: "user added" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
}
module.exports = {
    getUsers,newUsers
}