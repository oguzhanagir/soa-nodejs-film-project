const Joi = require("joi");

const validationSchema = Joi.object({
	name: Joi.string().trim().required().min(5).max(40),
	movieTitle: Joi.string().trim().required().min(1).max(255),
	movieInfo: Joi.number().trim().required().min(2).max(255),
});

const categoryValidate = async (req, res, next) => {
	const payload = {
		name: req.body.title,
		movieTitle: req.body.movieTitle,
		movieInfo: req.body.movieInfo,
	};

	const { error } = validationSchema.validate(payload);
	
	if (error) {
		return res.status(400).send(error.message);
	} else {
		next();
	}
};

module.exports = categoryValidate;