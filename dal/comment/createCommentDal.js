const Comment = require("../../models/Comment");

const createCommentDal = (user_name,title,content) =>{
    if (!user_name || !content) {
        throw new Error('Kullanıcı adı ve içerik alanı boş olamaz.');
      }
    
      Comment.create({
        user_name: user_name,
        title: title,
        content: content
    });
     
}
module.exports = createCommentDal

