const Comment = require("../../models/Comment");

const getCommentByFilmDal = (id) =>{
    const comment = Comment.findByPk(id);

    if(Object.keys(comment).length === 0)
    {
        return "Yorum Bulunamadı"
    }
    return comment
}
module.exports = getCommentByFilmDal

