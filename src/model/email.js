const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const emailSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  key: {
    type: String,
  },
  title: {
    type: String,
  },
  subject: {
    type: String,
  },
  body: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Email', emailSchema);
