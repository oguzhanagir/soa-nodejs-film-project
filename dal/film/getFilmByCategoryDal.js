const Film = require("../../models/Film");

const getFilmByCategoryDal = (id) =>{
    const film = Film.findByPk(id);

    if(Object.keys(film).length === 0)
    {
        return "Yorum Bulunamadı"
    }
    return film
}
module.exports = getFilmByCategoryDal

