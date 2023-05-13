const express = require('express')
const dotenv = require('dotenv').config()

const config = {
  PORT: process.env.PORT,
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
};

module.exports = config;
