const path = require('path');
const fs = require('fs');
const logger = require('../logger');
const Email = require('../model/email');

const addEmailTemplate = async () => {
  try {
    const htmlPath = path.join(__dirname, '../utils/mail/otp.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    const emailInstance = await Email.findOne({
      key: 'OTP_AUTHENTICATION',
    });

    if (!emailInstance) {
      const emailTemplate = {
        key: 'OTP_AUTHENTICATION',
        title: 'Login OTP',
        subject: 'Login OTP - My App',
        body: htmlContent,
      };
      await Email.create(emailTemplate);
    }
    emailInstance.body = htmlContent;
    await emailInstance.save();
    logger.info('OTP email template created!');
  } catch (error) {
    logger.info(`Error from create otp template >>> ${error}`);
    throw error;
  }
};

module.exports = addEmailTemplate;
