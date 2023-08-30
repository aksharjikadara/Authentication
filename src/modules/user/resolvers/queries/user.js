/* eslint-disable consistent-return */
const logger = require('../../../../logger');
const User = require('../../../../model/user');

const users = async (parent, args, ctx) => {
  try {
    const userInstance = await User.find();
    return userInstance;
  } catch (error) {
    logger.info(`Error from create user resolver >>> ${error}`, ctx);
    throw error;
  }
};

module.exports = users;
