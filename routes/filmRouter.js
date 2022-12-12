const router = require("express").Router();
const filmController = require("../dal/film/index");

router.get("/film/:filmId",filmController.getAllInfoFilm);

router.get("/film/:id",filmController.getFilmId);

router.post("/film", filmController.createFilm);

module.exports = router;