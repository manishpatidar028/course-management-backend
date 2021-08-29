const express = require('express');
const app = express();
const categoryRoutes = require('./v1/module/category/categoryRoutes');
const contentRouter = require('./v1/module/content/contentRoutes');
const authRouter = require('./v1/module/auth/authRoutes');

app.use('/auth', authRouter);
app.use('/category', categoryRoutes);
app.use('/content', contentRouter);

module.exports = app
