const Article = require('../models/articleModel');

async function createArticle({ body }, res) {
  try {
    const newArticle = await Article.create(body);
    return res.json(newArticle);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no cart'));
  }
}

async function getAllArticles({ query }, res) {
  try {
    const AllArticles = await Article.find(query);
    return res.json(AllArticles);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no Articles'));
  }
}
async function getArticleById({ params: { article } }, res) {
  try {
    const foundArticle = await Article.findById(article);
    return res.json(foundArticle);
  } catch (error) {
    res.status(404);
    return res.send(new Error('Article not found'));
  }
}

async function updateArticle({ params: { article }, body }, res) {
  try {
    const dataToUpdate = body;
    const updatedArticle = await Article.findByIdAndUpdate(
      article,
      dataToUpdate,
      { new: true }
    );
    res.json(updatedArticle);
  } catch (error) {
    res.status(501);
    res.send('Update not implemented');
  }
}
async function deleteArticle({ params: { article } }, res) {
  try {
    await Article.findByIdAndDelete(article);
    return res.send('The article has been deleted');
  } catch (error) {
    res.status(404);
    return res.send(new Error('Article not found'));
  }
}
module.exports = {
  createArticle, updateArticle, getAllArticles, getArticleById, deleteArticle
};
