const AuthController = require("../auth/index")

const registerForm = (req,res,next) =>{
    try{
        const { first_name, last_name, email, phone_number,password } = req.body;
        AuthController.register(first_name, last_name, email, phone_number,password)
        res.redirect("/");
        res.status(201).json({ message: "User Created"});
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports = registerForm