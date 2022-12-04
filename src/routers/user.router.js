const express = require('express');
const validateUser = require('../middlewares/userValidation');
const user = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateUser.validateUser, user.userCreate);

module.exports = router;