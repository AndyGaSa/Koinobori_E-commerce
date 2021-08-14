const express = require('express');
const articleController = require('../controllers/articlesController');

const articleRouter = express.Router();

articleRouter
  .route('/')
  .post(articleController.createArticle)
  .get(articleController.getAllArticles);
articleRouter
  .route('/:article')
  .get(articleController.getArticleById)
  .put(articleController.updateArticle)
  .delete(articleController.deleteArticle);
module.exports = articleRouter;
