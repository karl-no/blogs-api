const express = require('express');
const { validateCategory } = require('../middlewares/categoryValidation');
const { validateToken } = require('../middlewares/tokenValidation');
const category = require('../controllers/category.controller');

const router = express.Router();

router.post('/', validateToken, validateCategory, category.postCategory);

module.exports = router;