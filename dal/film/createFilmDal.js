const Film = require("../../models/Film");

const createFilmDal = (title,description,path) =>{
    if (!title || !path) {
        throw new Error('Film başlığı ve film yolu alanı boş olamaz.');
      }

		Film.create({
			title: title,
            description: description,
            path: path
		});     
}
module.exports = createFilmDal

