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
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    path:{
        type: DataTypes.STRING,
        allowNull: false,
    },


});

module.exports = Film;
