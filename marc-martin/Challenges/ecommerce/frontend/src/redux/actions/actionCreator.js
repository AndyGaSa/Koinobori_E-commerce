import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/productlist');

    dispatch({
      type: actionTypes.LOAD_PRODUCTLIST,
      data
    });
  };
}
