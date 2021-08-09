const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.admin = require('./admin-model')(sequelize, Sequelize)
db.teachers = require('./teachers-model')(sequelize, Sequelize)
db.students = require('./students-model')(sequelize, Sequelize)

module.exports = db;