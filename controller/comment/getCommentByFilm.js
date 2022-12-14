const CommentDal = require("../../dal/comment/getCommentByFilmDal");

const getCommentByFilm = async (req, res) => {
	try {
		const comment = await CommentDal.getCommentByFilm(req.params.id);
		res.status(200).json({ message: "Get Comment By Film", data: comment });
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = getCommentByFilm;