const express = require('express')
const authContoller = require('./authController')
const authRouter = express.Router()

authRouter.post('/signup', authContoller.signin);
authRouter.post('/checkUserExist', authContoller.isUserExist);

module.exports = authRouter;