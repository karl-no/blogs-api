const { Category } = require('../models');

const postCategory = async (category) => {
  const result = await Category.create(category);
  return result;
};

module.exports = {
  postCategory,
};