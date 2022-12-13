const Film = require("../../models/Film");

const getFilmByCategory = async (req, res) => {
	try {
		const film = await Film.findByPk(req.params.id);
		res.status(200).json({ message: "Get Film By Category", data: film });
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = getFilmByCategory;