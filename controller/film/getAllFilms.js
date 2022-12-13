const Film = require("../../models/Film");


const getAllFilms = async (req, res) => {
	try {
		const categories = await Film.findAll();
		res.status(200).json({ message: "Get All Films", data: categories });
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = getAllFilms;