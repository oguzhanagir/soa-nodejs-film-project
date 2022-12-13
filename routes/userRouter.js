const router = require("express").Router();
const userController = require("../dal/user/index");


router.get("/user/:Userid",userController.getAllInfoUser);

router.get("/user/:id",userController.getUserId);

router.post("/user",userController.createUser);


module.exports = router;

