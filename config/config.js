const express = require('express')
const dotenv = require('dotenv').config()

const config = {
  PORT: process.env.PORT,
};

module.exports = config;
