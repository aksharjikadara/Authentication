const express = require('express');
const config = require('./config/config')

const app = express()

const { PORT } = config;
app.use(express.json())

app.get('/', async (req, res) => {
  return res.status(200).send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});