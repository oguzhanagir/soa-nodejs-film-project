const AuthController = require("../auth/index")

const loginPage = async (req ,res) =>{
    try {
        const {email,password} = req.body
        const message = AuthController.login(res,email,password)
        console.log(message)
        res.status(200).json({message: message.message});
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports  = loginPage;