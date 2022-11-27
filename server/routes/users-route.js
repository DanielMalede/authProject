const router =require("express").Router();

const { getUsers,newUsers,register } = require("../controllers/users-ctrl");

router.get('/',register)
router.post('/addUser',newUsers)

module.exports = router