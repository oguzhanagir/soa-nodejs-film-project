const Category = require("../../models/Category");

const createCategoryDal = (name,movieTitle,movieInfo) =>{
    if (!name || !movieInfo) {
        throw new Error('Kategor ismi ve bilgi alanı boş olamaz.');
      }
    
      Category.create({name:name,movieTitle:movieTitle,movieInfo:movieInfo})
     
}
module.exports = createCategoryDal

