const UserDal = require("../../dal/user/index");

const register = async (req, res) => {
	try {
        const { first_name, last_name, email, phone_number,password } = req.body;
		UserDal.registerDal(first_name, last_name, email, phone_number,password)

		res.status(201).json({ message: "User Created"});
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = register;