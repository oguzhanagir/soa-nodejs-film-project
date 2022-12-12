const {DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const Comment = sequelize.define("comments",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    timeStamp:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    


});



module.exports = Comment;