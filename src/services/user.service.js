const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtSecret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const postLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (user) {
    const token = jwt.sign({ data: { email } }, jwtSecret, jwtConfig);
    return token;
  }
  return user;
};

module.exports = {
  postLogin,
};