const express = require('express')
const authContoller = require('./authController')
const authRouter = express.Router()

authRouter.get('/login', authContoller.login);
authRouter.post('/signup', authContoller.signin);

module.exports = categoryRouter;