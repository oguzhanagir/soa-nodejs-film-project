const movieDetailPage = async (req ,res) =>{
    try {
       res.status(200).render("../views/movie-details");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports  = movieDetailPage;