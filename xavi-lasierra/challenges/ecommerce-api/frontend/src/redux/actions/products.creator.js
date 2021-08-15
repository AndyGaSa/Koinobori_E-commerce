import axios from 'axios';

import actionTypes from './products.actions';

export default function getProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');

    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data
    });
  };
}
