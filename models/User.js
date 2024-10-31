const { Sequelize } = require("sequelize");

let User = Sequelize.define("user", {
    username: Sequelize.STRING,
    email: Sequelize.STRING
})


module.exports = User;