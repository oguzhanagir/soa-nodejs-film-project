const User = require("../../models/user");
const bcrypt = require("bcrypt");



const login = async (res,email,password) => {
	//checking if the email is correct
	const user = await User.findOne({where:{ email: email }});
	//email ve şifre kontrolü eklenecek
	const pass = await bcrypt.compare(password, user.password);
	if (user == null)
	{ 
		 
		return "kullanıcı yok" ;
	}
	else if (!pass)
	{
		return "şifre hatalı"
	}
	else{
		
		return "başarılı"
	}


};

module.exports = login;