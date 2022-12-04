const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtSecret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getToken = (result) => {
  const { password: _, ...payload } = result.dataValues;
  const token = jwt.sign({ payload }, jwtSecret, jwtConfig);
  return token;
};

const postLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (user) {
    return getToken(user);
  }
  return user;
};

const getUser = async (email) => {
  const result = await User.findOne({
    where: { email },
  });
  return result;
};

const userCreate = async (user) => {
  const existentUser = await getUser(user.email);
  if (existentUser) {
    return null;
  }
  const result = await User.create(user);
  return getToken(result);
};

module.exports = {
  postLogin,
  userCreate,
};