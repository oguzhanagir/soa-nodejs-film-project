const Film = require("../../models/Film");

const getAllFilmsDal = () =>{
    const films = Film.findAll();

    if(Object.keys(films).length === 0)
    {
        return "Film Bulunamadı"
    }
    return films
}
module.exports = getAllFilmsDal

