const express = require('express');
const validateLogin = require('../middlewares/loginValidation');
const login = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateLogin.validateLogin, login.postLogin);

module.exports = router;