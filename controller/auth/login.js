const User = require("../../models/user");
const bcrypt = require("bcrypt");


const login = async (req, res) => {
	try {
		//checking if the email is correct
		const user = await User.findOne({where:{ email: req.body.email }});
		if (!user) return res.status(400).json("Email or Password is wrong");

		//checking if the password is correct
		const pass = await bcrypt.compare(req.body.password, user.password);
		if (!pass) return res.status(400).json("Email or Password is wrong");

		
		res.status(200).json({ message:"Giriş Başarılı." });
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = login;