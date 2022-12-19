const router = require("express").Router();
const pageController = require("../controller/page/index");

router.get("/",pageController.indexPage);
router.get("/movies",pageController.moviePage);
router.get("/celebrities",pageController.celebritiesPage);
router.get("/top-movies",pageController.topmoviesPage);
router.get("/blog-details",pageController.blogDetailPage);
router.get("/blog",pageController.blogPage);
router.get("/login",pageController.loginPage);
router.post("/login",pageController.loginForm);
router.get("/movie-details",pageController.movieDetailPage);
router.get("/register",pageController.registerPage);
router.post("/register",pageController.registerForm);

module.exports = router;
