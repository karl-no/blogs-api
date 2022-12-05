const { Category } = require('../models');

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const postCategory = async (name) => {
  const newCategory = await Category.create(name);
  return newCategory;
};

module.exports = {
  postCategory,
  getCategories,
};