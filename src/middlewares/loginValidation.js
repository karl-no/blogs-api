const joi = require('joi');

const loginValidation = joi.object().keys({
  email: joi.string().min(1).required(),
  password: joi.string().min(1).required(),
});

const validateLogin = (req, res, next) => {
  const login = req.body;
  const { error } = loginValidation.validate(login);
  if (error) {
    const [detail] = error.details;
    if (detail.type === 'any.required' || detail.type === 'string.empty') {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  }
  return next();
};

module.exports = {
  validateLogin,
};
