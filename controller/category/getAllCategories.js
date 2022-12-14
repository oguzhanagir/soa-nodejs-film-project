const CategoryDal = require("../../dal/category/index");


const getAllCategories = async (req, res) => {
	try {
		const categories = await CategoryDal.getAllCategoriesDal();
		res.status(200).json({ message: "Get All Categories", data: categories });
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = getAllCategories;