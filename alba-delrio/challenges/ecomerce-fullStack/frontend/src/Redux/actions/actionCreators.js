import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadArticles() {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5001/api/article');
    dispatch({
      type: actionTypes.LOAD_ARTICLES,
      articles: data
    });
  };
}
