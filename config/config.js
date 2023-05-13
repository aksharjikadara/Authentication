require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
  JWT_KEY: process.env.JWT_KEY,
  JWT_EXPIRES: process.env.JWT_EXPIRES,
};

module.exports = config;
