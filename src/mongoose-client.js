const mongoose = require('mongoose');

const config = require('../config/config');
const logger = require('./logger');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.DATABASE_URL);
    if (!connect) logger.info('Database sync failed!');
    logger.info('Database sync successfully!');
  } catch (error) {
    logger.error('ERROR FROM DATABASE CONNECTION >>>', error);
  }
  return 0;
};

module.exports = connectDB;
