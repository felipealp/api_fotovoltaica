module.exports = {
  // Database credentials
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_DATABASE,
  dialect: process.env.DB_CONNECTION,

  // Pool settings of Sequelize connection
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};