const crypto = require('crypto');

const generateOTP = (length) => {
  const digits = '0123456789';
  let otp = '';

  for (let i = 0; i < length; i += 1) {
    const randomIndex = crypto.randomInt(0, digits.length);
    otp += digits[randomIndex];
  }
  return otp;
};

module.exports = generateOTP;
