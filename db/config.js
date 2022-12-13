const Sequelize = require("sequelize");

const sequelize = new Sequelize("soaproject", "root", "",{
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;