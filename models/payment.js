const {DataTypes } = require("sequelize");
const sequelize = require("../db/config");

const Payment = sequelize.define("payments",{
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
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cardInfo:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
   

});



module.exports = Payment;