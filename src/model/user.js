const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  otp: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  token: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
