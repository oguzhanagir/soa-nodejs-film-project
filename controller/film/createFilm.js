const FilmDal = require("../../dal/film/index");

const createFilm = async (req, res) => {
	try {
		const { title,description,path} = req.body;
		FilmDal.createFilmDal(title,description,path)

		res.status(201).json({ message: "Film is Created"});
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = createFilm;