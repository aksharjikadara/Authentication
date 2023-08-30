/* eslint-disable consistent-return */
const logger = require('../../../../logger');
const User = require('../../../../model/user');

const createUser = async (parent, args, ctx) => {
  try {
    let { data: { firstName, lastName, email } } = args;

    if (!firstName.trim()) return 'first name is required!';
    if (!email.trim()) return 'email is required!';
    if (firstName) firstName = firstName.trim();
    if (lastName) lastName = lastName.trim();
    if (email) email = email.trim();

    await User.create({
      firstName,
      lastName,
      email,
    });
    const response = {
      message: 'User Created!',
    };
    return response;
  } catch (error) {
    logger.info(`Error from create user resolver >>> ${error}`, ctx);
    throw error;
  }
};

module.exports = createUser;
