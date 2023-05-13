const UserModel = require('../../model/user');
const auth = require('../../utils/auth');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userInstance = await UserModel.findOne({ email });

    if (userInstance) {
      return res.status(500).json({ message: 'User is Already Exist' });
    }

    const hashPassword = await auth.generateHash(password);

    const user = new UserModel({
      name,
      email,
      password: hashPassword,
    });
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = signup;
