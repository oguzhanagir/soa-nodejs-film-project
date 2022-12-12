const router = require("express").Router();
const commentController = require("../dal/comment/index");

router.get("/comment/:id",commentController.listCommentByFilm);

router.post("/comment", commentController.createComment);

module.exports = router;