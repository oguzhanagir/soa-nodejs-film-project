const blogPage = async (req ,res) =>{
    try {
       res.status(200).render("../views/blog");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports  = blogPage;