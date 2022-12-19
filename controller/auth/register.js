const UserDal = require("../../dal/user/index");

const register = async (first_name,last_name,email,phone_number,password) => {
	try{
		UserDal.registerDal(first_name, last_name, email, phone_number,password)
	}catch(err){
		throw err
	}

};

module.exports = register;