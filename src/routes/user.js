const express = require('express');

const router = express.Router();

const controller = require('../controller/index');

router.get('/login', (req, res) => {
  res.send('in login');
});
router.post('/signup', controller.signup);

module.exports = router;
