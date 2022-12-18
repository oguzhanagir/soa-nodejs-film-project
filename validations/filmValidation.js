const Joi = require("joi");

const validationSchema = Joi.object({
	id: Joi.number().trim().required().min(1).max(100),
	title: Joi.string().trim().required().min(5).max(40),
	description: Joi.string().trim().required().min(10).max(255),
});

const filmValidate = async (req, res, next) => {
	const payload = {
		id:req.body.title,
		title: req.body.title,
		description: req.body.description,
	};

	const { error } = validationSchema.validate(payload);
	
	if (error) {
		return res.status(400).send(error.message);
	} else {
		next();
	}
};

module.exports = filmValidate;
