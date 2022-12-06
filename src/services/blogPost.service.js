const { sequelize, BlogPost, Category, PostCategory, User } = require('../models');

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
    const post = await sequelize.transaction(async (data) => {
      const newData = await BlogPost.create({ userId, title, content }, { transaction: data });

      await Promise.all(categoryIds.map(async (categoryId) => PostCategory.create({ 
        postId: newData.id, categoryId }, { transaction: data })));
      return newData;
    });
    return post;
  } catch (error) {
    return error;
  }
};

const getPosts = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attribute: [] } },
  ],
});

module.exports = {
  createPost,
  getPosts,
};