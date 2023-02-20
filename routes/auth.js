const express = require('express');

const { signup, login } = require('../controllers/auth.js');

const router = express.Router();

router.get('/signup', signup);
router.get('/login', login);

module.exports = router;