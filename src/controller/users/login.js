const UserModel = require('../../model/user');
const auth = require('../../utils/auth');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: 'Please provide the details' });
    }

    const userInstance = await UserModel.findOne({ email });
    if (!userInstance) {
      return res.json({ message: 'User Not Found' });
    }

    const passwordMatch = await auth.compareHash(password, userInstance.password);
    if (!passwordMatch) {
      return res.json({ message: 'Invalid password' });
    }

    const token = await auth.generateToken({ id: userInstance.id, email: userInstance.email });

    await userInstance.updateOne({
      token,
    });
    return res.status(200).json({ Token: token });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = login;
