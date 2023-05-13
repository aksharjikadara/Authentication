const userModel = require('../../model/user');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new userModel({
      name,
      email,
      password
    });
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = signup;