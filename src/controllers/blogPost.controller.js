const blogPostService = require('../services/blogPost.service');

const createPost = async (req, res) => {
  const post = req.body;
  const { id } = req.user;
  const newPost = await blogPostService.createPost(post, id);

  if (newPost.type) {
    return res.status(newPost.type).json({ message: newPost.message });
  }
  res.status(201).json(newPost);
};

const getPosts = async (_req, res) => {
  const post = await blogPostService.getPosts();

  res.status(200).json(post);
};

module.exports = {
  createPost,
  getPosts,
};