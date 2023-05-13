const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const generateHash = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const compareHash = async (password, hash) => {
  const passwordMatch = await bcrypt.compare(password, hash);
  return passwordMatch;
};

const generateToken = async (payload) => {
  const token = jwt.sign(payload, config.JWT_KEY, { expiresIn: config.JWT_EXPIRES });
  return token;
};

module.exports = {
  generateHash,
  compareHash,
  generateToken,
};
