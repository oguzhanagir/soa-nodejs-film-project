const Joi = require("joi");

const validationSchema = Joi.object({
	first_name: Joi.string().trim().required().min(1).max(255),
	last_name: Joi.number().trim().required().min(2).max(255),
    email: Joi.string().trim().required().min(2).max(40),
    password: Joi.string().trim().required().min(2).max(30),
    phone_number: Joi.number().trim().required().min(10).max(11),
});

const authValidate = async (req, res, next) => {
	const payload = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number,
	};

	const { error } = validationSchema.validate(payload);
	
	if (error) {
		return res.status(400).send(error.message);
	} else {
		next();
	}
};

module.exports = authValidate;
