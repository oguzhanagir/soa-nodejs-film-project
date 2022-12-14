const router = require("express").Router();
const filmController = require("../controller/film/index");

router.get("/film/:id",filmController.getFilmByCategory);

router.get("/film",filmController.getAllFilms);

router.post("/film", filmController.createFilm);

module.exports = router;