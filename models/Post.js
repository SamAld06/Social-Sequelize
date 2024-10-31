const { Sequelize } = require("sequelize");

let Post = Sequelize.define("post", {
    title: Sequelize.STRING,
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING
})


module.exports = Post;