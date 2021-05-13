const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize('ribbon', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate();
