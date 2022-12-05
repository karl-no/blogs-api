const joi = require('joi');

const categoryValidation = joi.object().keys({
  name: joi.string().required(),
});

const validateCategory = (req, res, next) => {
  const category = req.body;
  const { error } = categoryValidation.validate(category);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
};

module.exports = {
  validateCategory,
};
