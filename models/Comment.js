const { Sequelize } = require("sequelize");

let Comment = Sequelize.define("comment", {
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING
})


module.exports = Comment;