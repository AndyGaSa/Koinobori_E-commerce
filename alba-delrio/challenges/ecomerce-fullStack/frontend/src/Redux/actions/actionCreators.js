import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadArticles() {
  return async (dispatch) => {
    const { articles } = await axios.get('/api/article');
    dispatch({
      type: actionTypes.LOAD_ARTICLES,
      articles
    });
  };
}
