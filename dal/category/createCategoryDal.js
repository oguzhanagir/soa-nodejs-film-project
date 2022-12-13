const Category = require("../../models/Category");

const createCategoryDal = (name,movieTitle,movieInfo) =>{
    if (!name || !movieInfo) {
        throw new Error('title and description fields cannot be empty');
      }

      console.log(name,movieTitle,movieInfo)
      
      Category.create({name:name,movieTitle:movieTitle,movieInfo:movieInfo})
     
}
module.exports = createCategoryDal

