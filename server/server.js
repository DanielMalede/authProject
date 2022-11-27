const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = 7000;
const usersRouter = require('./routes/users-route')
const passport = require('passport')
require('./config/passport')(passport)


app.use(passport.initialize())
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/users',usersRouter)
app.get("/", passport.Authenticator('jwt',{session:false}),(req, res) => {
  res.send("success");
});


app.listen(port, () => {
  console.log(`server is ${port}`);
});
