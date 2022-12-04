const joi = require('joi');

const userValidation = joi.object().keys({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
});

const validateUser = (req, res, next) => {
  const user = req.body;
  const { error } = userValidation.validate(user);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
};

module.exports = {
  validateUser,
};