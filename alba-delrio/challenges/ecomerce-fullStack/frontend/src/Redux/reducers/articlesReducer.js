import actionTypes from '../actions/actionTypes';

export default function articlesReducer(articles = [], action) {
  if (action.type === actionTypes.LOAD_ARTICLES) {
    return action.data;
  }
  return articles;
}
