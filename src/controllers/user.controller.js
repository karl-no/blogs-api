const loginService = require('../services/user.service');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.postLogin(email, password);
  if (!result) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  res.status(200).json({ token: result });
};

const getEveryUser = async (_req, res) => {
  const everyUser = await loginService.getEveryUser();

  res.status(200).json(everyUser);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const result = await loginService.getUserById(id);
  if (result) {
    return res.status(200).json(result);
  }
  res.status(404).json({ message: 'User does not exist' });
};

const userCreate = async (req, res) => {
  const user = req.body;
  const createdUser = await loginService.userCreate(user);
  if (createdUser) {
    return res.status(201).json({ token: createdUser });
  }
  res.status(409).json({ message: 'User already registered' });
};

module.exports = {
  postLogin,
  getEveryUser,
  getUserById,
  userCreate,
};