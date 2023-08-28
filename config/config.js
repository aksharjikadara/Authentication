require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT: {
    KEY: process.env.JWT_KEY,
    EXPIRES: process.env.JWT_EXPIRES,
  },
  MAIL: {
    USERNAME: process.env.MAIL_USERNAME,
    PASSWORD: process.env.MAIL_PASSWORD,
  },
};

module.exports = config;
