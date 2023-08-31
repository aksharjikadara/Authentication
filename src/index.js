const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const packageJson = require('../package.json');

const CONFIG = require('../config/config');
const router = require('./routes/index');
const mongooseClient = require('./mongoose-client');
const logger = require('./logger');
const startApolloServer = require('./start-apollo-server');
const addEmailTemplate = require('./boot/add-email-template');

const mainPath = path.join(__dirname, '/views');
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(mainPath));

router(app);

app.get('/version', (req, res) => { res.json({ version: packageJson.version }); });

(async () => {
  try {
    await startApolloServer(app);
    const httpServer = http.createServer(app);
    await mongooseClient();
    addEmailTemplate();
    httpServer.listen(CONFIG.PORT, () => {
      logger.info(`🚀 Server ready at http://localhost:${CONFIG.PORT}/graphql`);
    });
    return true;
  } catch (error) {
    logger.error(error);
    return error;
  }
})();

const homePath = path.join(__dirname, '/views/index.html');
app.get('/', async (req, res) => res.sendFile(homePath));

const signupPath = path.join(__dirname, '/views/signup.html');
app.get('/signup', async (req, res) => res.sendFile(signupPath));

const loginPath = path.join(__dirname, '/views/login.html');
app.get('/login', async (req, res) => res.sendFile(loginPath));

module.exports = app;
