import axios from 'axios';

import actionTypes from './products.actions';

export default function getProducts(option, filter) {
  return async (dispatch) => {
    let url;
    if (option && filter) {
      url = `/api/products/?${option}=${filter}`;
    } else {
      url = '/api/products';
    }
    const { data } = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data
    });
  };
}
