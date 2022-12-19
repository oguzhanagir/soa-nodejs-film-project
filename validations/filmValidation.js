const Joi = require("joi");

const validationSchema = Joi.object({
	title: Joi.string().trim().required().min(5).max(40),
	description: Joi.string().trim().required().min(10).max(255),
	path: Joi.string().trim().required(),
});

const filmValidate = async (req, res, next) => {
	const payload = {
		title: req.body.title,
		description: req.body.description,
		path: req.body.path
	};

	const { error } = validationSchema.validate(payload);
	
	if (error) {
		return res.status(400).send(error.message);
	} else {
		next();
	}
};

module.exports = filmValidate;
