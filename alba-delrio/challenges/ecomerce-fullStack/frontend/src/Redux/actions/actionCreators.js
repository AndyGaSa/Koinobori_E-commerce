import actionTypes from './actionTypes';

export default function loadArticles(articles) {
  return {
    type: actionTypes.LOAD_ARTICLES,
    articles
  };
}
