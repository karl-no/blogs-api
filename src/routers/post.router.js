const express = require('express');
const { validatePost } = require('../middlewares/postValidation');
const { validateToken } = require('../middlewares/tokenValidation');
const blogPost = require('../controllers/blogPost.controller');

const router = express.Router();

router.get('/', validateToken, blogPost.getPosts);
router.post('/', validateToken, validatePost, blogPost.createPost);

module.exports = router;