const router = require("express").Router();
const categoryController = require("../controller/category/index");

router.get("/category/",categoryController.getAllCategories);

router.post("/category", categoryController.createCategory);

module.exports = router;