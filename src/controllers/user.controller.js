const loginService = require('../services/user.service');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.postLogin(email, password);
  if (!result) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  res.status(200).json({ token: result });
};

module.exports = {
  postLogin,
};