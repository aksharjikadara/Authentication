const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const { isEmpty } = require('lodash');

const CONFIG = require('../../../config/config');
const logger = require('../../logger');
const Email = require('../../model/email');

const sendMail = async (obj) => {
  const { toEmailAddresses, templateKey, data } = obj;
  const emailInstance = await Email.findOne({ key: templateKey });
  const template = handlebars.compile(emailInstance.body);
  const htmlContent = template(data);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: CONFIG.MAIL.USERNAME,
      pass: CONFIG.MAIL.PASSWORD,
    },
  });

  const mailOptions = {
    from: CONFIG.MAIL.SENDER,
    to: toEmailAddresses,
    subject: emailInstance.subject,
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) logger.error(error);
    if (!isEmpty(info.accepted)) logger.info(`${info.response} ${info.accepted}`);
  });
};

module.exports = sendMail;
