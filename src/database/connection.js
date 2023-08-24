const Sequelize = require('sequelize');
const dbConfig = require('../config/database.config');
const connection = new Sequelize(dbConfig);

module.exports = connection;