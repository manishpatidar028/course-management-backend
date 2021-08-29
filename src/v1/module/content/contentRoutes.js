const express = require('express')
const contentContoller = require('./contentController')
const contentRouter = express.Router()

contentRouter.get('/get-content', contentContoller.getcontent);
contentRouter.post('/add-content', contentContoller.addcontent);

module.exports = contentRouter;