const FilmDal = require("../../dal/film/index");


const getAllFilms = async (req, res) => {
	try {
		const films = await FilmDal.getAllFilms();
		res.status(200).json({ message: "Get All Films", data: films });
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = getAllFilms;