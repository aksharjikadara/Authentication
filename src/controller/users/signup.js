const UserModel = require('../../model/user');
const auth = require('../../utils/auth');

const signup = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!email.trim() || !password.trim()) {
      return res.json({ message: 'Please provide the email or password!' });
    }
    if (name) name = name.trim();
    if (email) email = email.trim();
    if (password) password = password.trim();

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
