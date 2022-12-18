const blogDetailPage = async (req ,res) =>{
    try {
       res.status(200).render("../views/blog-details");
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports  = blogDetailPage;