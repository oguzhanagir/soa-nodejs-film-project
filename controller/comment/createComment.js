const CommentDal = require("../../dal/comment/index")

const createComment = async (req, res) => {
	try {
		const { user_name,title,content} = req.body;
		CommentDal.createCommentDal(user_name,title,content)
		
		res.status(201).json({ message: "Comment is Created"});
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = createComment;