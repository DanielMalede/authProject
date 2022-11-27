const router = require("express").Router();

const { getUsers,newUsers } = require("../controllers/users-ctrl");

router.get('/',getUsers)
router.post('/addUser',newUsers)

module.exports = router