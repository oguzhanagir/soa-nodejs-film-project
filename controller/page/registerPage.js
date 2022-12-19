const AuthController = require("../auth/index")

const registerPage = async (req ,res) =>{
    try {
        
        res.status(200).render("../views/register");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports  = registerPage;