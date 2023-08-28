const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const CONFIG = require('../../../config/config');
const logger = require('../../logger');

const sendMail = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: CONFIG.MAIL.USERNAME,
      pass: CONFIG.MAIL.PASSWORD,
    },
  });

  const templatePath = path.join(__dirname, '/otp.html');
  const htmlContent = fs.readFileSync(templatePath, 'utf8');

  const mailOptions = {
    from: 'jikadara2aj@gmail.com',
    to: 'akshar.logicwind@gmail.com',
    subject: 'Nodemailer Test',
    text: 'testing message',
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) logger.error(error);
    logger.info(info);
  });
};

module.exports = sendMail;
