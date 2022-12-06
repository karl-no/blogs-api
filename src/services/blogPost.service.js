const { sequelize, BlogPost, Category, PostCategory } = require('../models');

const noCategory = async (categories) => {
  const { count } = await Category.findAndCountAll({ where: { id: categories } });
  return (categories.length !== count);
};

const createPost = async ({ title, content, categoryIds }, userId) => {
  if (await noCategory(categoryIds)) {
    return {
      type: 400,
      message: 'one or more "categoryIds" not found',
    };
  }
  try {
    const post = await sequelize.transaction(async (t) => {
      const newData = await BlogPost.create({ userId, title, content }, { transaction: t });
      await Promise.all(categoryIds.map(async (categoryId) => PostCategory.create({ 
        postId: newData.id, categoryId }, { transaction: t })));
      return newData;
    });
    return post;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createPost,
};