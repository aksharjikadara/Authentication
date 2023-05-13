const mongoose = require('mongoose');

const config = require('../config/config');
const logger = require('./logger');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(config.DB_CONNECTION_URL);
    if (!connection) {
      logger.info('Database can not connect');
      // console.log('Database can not connect');
    }
    logger.info('Database connected successfully');
    // console.log('Database connected successfully');
  } catch (error) {
    logger.error('ERROR FROM DATABASE CONNECTION', error);
  }
  return 0;
};

module.exports = connectDB;
