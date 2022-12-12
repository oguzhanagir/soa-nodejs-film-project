const Category = require("../../models/Category");

const createCategory = async (req, res) => {
	try {
		const { title,movieTitle,movieInfo} = req.body;

		Category.create({
            title: title,
            movieTitle: movieTitle,
            movieInfo: movieInfo
		});
		
		res.status(201).json({ message: "Category is Created"});
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = createCategory;