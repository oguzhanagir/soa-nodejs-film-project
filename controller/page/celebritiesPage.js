const celebritiesPage = async (req ,res) =>{
    try {
       res.status(200).render("../views/celebrities");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports  = celebritiesPage;