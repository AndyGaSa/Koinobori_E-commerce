const express = require('express');
const articleController = require('../controllers/articlesController');

const articleRouter = express.Router();

articleRouter
  .route('/')
  .get(articleController.getAllArticles)
  .post(articleController.createArticle);

articleRouter
  .route('/:article')
  .get(articleController.getArticleById)
  .put(articleController.updateArticle)
  .delete(articleController.deleteArticle);
module.exports = articleRouter;
