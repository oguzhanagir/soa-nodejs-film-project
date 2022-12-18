const loginPage = async (req ,res) =>{
    try {
       res.status(200).render("../views/login");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports  = loginPage;