require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT: {
    KEY: process.env.JWT_KEY,
    EXPIRES: process.env.JWT_EXPIRES,
  },
  // JWT_KEY: process.env.JWT_KEY,
  // JWT_EXPIRES: process.env.JWT_EXPIRES,
};

module.exports = config;
