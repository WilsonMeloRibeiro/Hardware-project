const Sequelize = require('sequelize')
const dbconfig = require('../config/database.cjs')

const connection = new Sequelize(dbconfig)

module.exports = connection;