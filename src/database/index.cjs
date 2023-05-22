const Sequelize = require('sequelize');
const dbconfig = require('../config/database.cjs');
const User = require('../models/User.cjs');

const connection = new Sequelize(dbconfig);

User.init(connection);

module.exports = connection;