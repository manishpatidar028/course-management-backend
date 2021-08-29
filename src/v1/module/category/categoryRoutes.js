const express = require('express')
const categoryContoller = require('./categoryController')
const categoryRouter = express.Router()

categoryRouter.get('/get-category', categoryContoller.getCategory);
categoryRouter.post('/add-category', categoryContoller.addCategory);

module.exports = categoryRouter;