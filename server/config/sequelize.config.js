// Import Sequelize
const Sequelize = require('sequelize');

// Create an instance of sequelize
const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'db',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
