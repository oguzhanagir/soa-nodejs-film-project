const CategoryDal = require ("../../dal/category/index")

const createCategory = async (req, res) => {
	try {
		const { name,movieTitle,movieInfo} = req.body;
		CategoryDal.createCategoryDal(name,movieTitle,movieInfo)

		res.status(201).json({ message: "Category is Created"});
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = createCategory;