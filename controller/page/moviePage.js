const moviePage = async (req ,res) =>{
    try {
       res.status(200).render("../views/movies");
    } catch (err) {
        res.status(500).send(err);
    }
};
module.exports  = moviePage;