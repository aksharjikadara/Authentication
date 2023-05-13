const express = require('express');
const path = require('path');

const config = require('../config/config')
const router = require('./routes/index')
const connectDB = require('./client-db');

const { PORT } = config;

const mainPath = path.join(__dirname, '/views')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(mainPath))

connectDB();

router(app)

const homePath = path.join(__dirname, '/views/index.html')
app.get('/', async (req, res) => {
  return res.sendFile(homePath);
});

const signupPath = path.join(__dirname, '/views/signup.html')
console.log(signupPath);
app.get('/signup', async (req, res) => {
  return res.sendFile(signupPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});