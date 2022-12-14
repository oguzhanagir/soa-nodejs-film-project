const FilmDal = require("../../dal/film/index");

const getFilmByCategory = async (req, res) => {
	try {
		const film = await FilmDal.getFilmByCategory(req.params.id);
		res.status(200).json({ message: "Get Film By Category", data: film });
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = getFilmByCategory;