const mongoose = require('mongoose');
const config = require('../config/config')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(config.DB_CONNECTION_URL);
    if (!connection) {
      console.log('Database can not connect');
    }
    console.log('Database connected successfully');
  } catch (error) {
    return console.log(error);
  }
};

module.exports = connectDB;
