const categoryService = require('../services/category.service');

const postCategory = async (req, res) => {
  const category = req.body;
  const newCategory = await categoryService.postCategory(category);

  if (newCategory) {
    return res.status(201).json(newCategory);
  }
  res.status(409).json({ message: 'Category already registered' });
};

const getCategories = async (_req, res) => {
  const categories = await categoryService.getCategories();

  res.status(200).json(categories);
};

module.exports = {
  postCategory,
  getCategories,
};