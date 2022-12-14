const {DataTypes } = require("sequelize");
const sequelize = require("../db/config");
const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/ 

const User = sequelize.define("users",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    phone_number:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            validator: function(v){
                return phoneValidationRegex.test(v);
            }
        }
    },
 
});
module.exports = User;