const express = require('express');
const { validateUser } = require('../middlewares/userValidation');
const { validateToken } = require('../middlewares/tokenValidation');
const user = require('../controllers/user.controller');

const router = express.Router();

router.get('/', validateToken, user.getEveryUser);
router.post('/', validateUser, user.userCreate);

module.exports = router;