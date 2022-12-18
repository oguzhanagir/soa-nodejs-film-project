const Joi = require("joi");

const validationSchema = Joi.object({
	id: Joi.number().trim().required().min(1).max(100),
	user_name: Joi.string().trim().required().min(3).max(40),
	content: Joi.string().trim().required().min(3).max(255),
	title: Joi.string().trim().required().min(1).max(40),
});

const commentValidate = async (req, res, next) => {
	const payload = {
		id:req.body.title,
		user_name: req.body.user_name,
		content: req.body.content,
        title: req.body.title,
	};

	const { error } = validationSchema.validate(payload);
	
	if (error) {
		return res.status(400).send(error.message);
	} else {
		next();
	}
};

module.exports = commentValidate;