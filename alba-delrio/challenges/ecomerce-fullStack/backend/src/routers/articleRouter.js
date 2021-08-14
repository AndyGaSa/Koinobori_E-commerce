const express = require('express');
const articleController = require('../controllers/articlesController');

const articleRouter = express.Router();

articleRouter
  .route('/')
  .post(articleController.createArticle);

module.exports = articleRouter;
