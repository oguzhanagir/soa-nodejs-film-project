const Comment = require("../../models/Comment");

const createComment = async (req, res) => {
	try {
		const { user_name,title,content} = req.body;

		Comment.create({
			user_name: user_name,
            title: title,
            content: content
		});
		
		res.status(201).json({ message: "Comment is Created"});
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = createComment;