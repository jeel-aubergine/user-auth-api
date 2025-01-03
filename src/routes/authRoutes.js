const express = require('express');
const authControllers = require('../controllers/authControllers');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', authControllers.registerUserController);
router.post('/login', authControllers.loginUserController);

router.get('/profile', authMiddleware, authControllers.profileUserController);
router.get('/logout', authMiddleware, authControllers.logoutUserController);

module.exports = router;
