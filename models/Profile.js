const { Sequelize } = require("sequelize");

let Profile = Sequelize.define("profile", {
    bio: Sequelize.STRING,
    profilePicture: Sequelize.STRING,
    birthday: Sequelize.STRING
})


module.exports = Profile;