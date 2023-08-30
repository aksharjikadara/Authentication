/* eslint-disable consistent-return */
const logger = require('../../../../logger');
const User = require('../../../../model/user');
const auth = require('../../../../utils/auth');
const generateOTP = require('../../../../utils/create-id');
const sendMail = require('../../../../utils/mail/send-mail');

const login = async (parent, args, ctx) => {
  try {
    let { email } = args;

    if (!email.trim()) return 'email is required!';
    if (email) email = email.trim();
    let isNewUser = false;

    let userInstance = await User.findOne({ email });

    const refreshToken = await auth.generateToken({ email });
    if (!userInstance) {
      const data = {
        email,
        refreshToken,
      };
      userInstance = await User.create(data);
      isNewUser = true;
    }

    // let otp;
    const otp = generateOTP(6);

    sendMail();
    // sendMail({
    //   toEmailAddresses: [userInstance.email],
    //   templateKey: 'OTP_AUTHENTICATION',
    //   data: {
    //     otp,
    //   },
    // });

    const response = {
      status: 'Success!',
      message: 'OTP has been sent for login!',
      isNewUser,
    };

    userInstance.otp = otp;

    // await User.create({
    //   email,
    // });
    await userInstance.save();
    return response;
  } catch (error) {
    logger.info(`ERROR FROM LOGIN USER RESOLVER >>> ${error}`, ctx);
    throw error;
  }
};

module.exports = login;
