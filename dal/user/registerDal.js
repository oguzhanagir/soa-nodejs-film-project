const User = require("../../models/user")
const bcrypt = require("bcrypt");


const registerDal = async (first_name, last_name, email, phone_number,password )=>{

    const emailExist = await User.findOne({where: { email: email }});
    if (emailExist)
        return res.status(400).send("You cannot register, email already exist");

    const hashedPass = await bcrypt.hash(password, 10);
  

    User.create({
        first_name:first_name,
        last_name: last_name,
        email: email,
        password:hashedPass,
        phone_number: phone_number,

    });
}

module.exports = registerDal;