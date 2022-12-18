const topmoviesPage = async (req ,res) =>{
    try {
       res.status(200).render("../views/top-movies");
    } catch (err) {
        res.status(500).send(err);
    }
};
module.exports  = topmoviesPage;