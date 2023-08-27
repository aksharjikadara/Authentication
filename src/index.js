const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const CONFIG = require('../config/config');
const router = require('./routes/index');
const mongooseClient = require('./mongoose-client');
const logger = require('./logger');

const mainPath = path.join(__dirname, '/views');
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(mainPath));

mongooseClient();

router(app);

const homePath = path.join(__dirname, '/views/index.html');
app.get('/', async (req, res) => res.sendFile(homePath));

const signupPath = path.join(__dirname, '/views/signup.html');
app.get('/signup', async (req, res) => res.sendFile(signupPath));

const loginPath = path.join(__dirname, '/views/login.html');
app.get('/login', async (req, res) => res.sendFile(loginPath));

app.listen(CONFIG.PORT, () => {
  logger.info(`Server is running on http://localhost:${CONFIG.PORT}`);
});
