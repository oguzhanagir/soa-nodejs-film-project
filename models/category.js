const {DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const Category = sequelize.define("categories",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    categoryName:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    movieTitle:{
        type: DataTypes.STRING,
        allowNull: false
    },
    movieInfo:{
        type: DataTypes.STRING,
        allowNull: true
    },


});



module.exports = Category;