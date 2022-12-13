const Film = require("../../models/Film");

const createFilm = async (req, res) => {
	try {
		const { user_name,title,content} = req.body;

		Film.create({
			user_name: user_name,
            title: title,
            content: content
		});
		
		res.status(201).json({ message: "Film is Created"});
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = createFilm;