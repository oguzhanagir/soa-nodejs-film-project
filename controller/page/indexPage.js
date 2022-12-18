const indexPage = async (req ,res) =>{
    try {
       res.status(200).render("../views/index");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports  = indexPage;

