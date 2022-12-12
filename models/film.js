const {DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const Film = sequelize.define("films",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    full_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    addressLine:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    zip_code:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },


});



module.exports = Film;