const joi = require('joi');

const postValidation = joi.object().keys({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().items(
    joi.number().integer().required(),
  ).min(1).required(),
});

const validatePost = (req, res, next) => {
  const post = req.body;
  const { error } = postValidation.validate(post);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
  validatePost,
};
