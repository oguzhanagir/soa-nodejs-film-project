const router = require("express").Router();
const commentController = require("../controller/comment/index");

router.get("/comment/:id",commentController.getCommentByFilm);

router.post("/comment", commentController.createComment);

module.exports = router;