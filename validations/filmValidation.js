const Joi = require("joi");

const validationSchema = Joi.object({
	full_name: Joi.string().trim().required().min(5).max(40),
	title: Joi.string().trim().required().min(5).max(40),
	addressLine: Joi.string().trim().required().min(10).max(255),
	zip_code: Joi.number().trim().required().min(3).max(10),
});

const filmValidate = async (req, res, next) => {
	const payload = {
		firstname_lastname: req.body.full_name,
		addressLine: req.body.addressLine,
		zip_code: req.body.zip_code,
		title: req.body.title,
	};

	const { error } = validationSchema.validate(payload);
	
	if (error) {
		return res.status(400).send(error.message);
	} else {
		next();
	}
};

module.exports = addressValidate;