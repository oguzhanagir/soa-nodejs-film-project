const router = require("express").Router();
const commentController = require("../dal/comment/index");


router.post("/comment", commentController.createComment);

module.exports = router;