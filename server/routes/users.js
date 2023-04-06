const express = require('express');
const router = express.Router();
const { register, login, logout, getLoggedInUser } = require('../controllers/users');
const authenticate = require('../middlewares/auth');
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/loggedin-user', authenticate, getLoggedInUser);

module.exports = router;