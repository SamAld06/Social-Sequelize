const { Sequelize } = require("sequelize");

let Like = Sequelize.define("post", {
    reactionType: Sequelize.STRING,
    createdAt: Sequelize.STRING
})

module.exports = Like;