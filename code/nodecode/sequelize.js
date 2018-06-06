const Sequelize = require('sequelize');
const databaseConfig = require('./database.config');
const sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
  host: databaseConfig.host,
  port: databaseConfig.port,
  dialect: databaseConfig.dialect,
  operatorsAliases: databaseConfig.operatorsAliases,
  pool: databaseConfig.pool
})

module.exports = sequelize
