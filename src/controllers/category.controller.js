const categoryService = require('../services/category.service');

const postCategory = async (req, res) => {
  const category = req.body;
  const result = await categoryService.postCategory(category);

  if (result) {
    return res.status(201).json(result);
  }
  res.status(409).json({ message: 'Category already registered' });
};

module.exports = {
  postCategory,
};