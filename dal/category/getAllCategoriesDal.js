const Category = require("../../models/Category");

const getAllCategoriesDal = () =>{
    const categories = Category.findAll();

    if(Object.keys(categories).length === 0)
    {
        return "Kategori Bulunamadı"
    }
    return categories
}
module.exports = getAllCategoriesDal

