import axios from 'axios';

import actionTypes from './randomProduct.actions';

export default function getRandomProduct() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products/random');

    dispatch({
      type: actionTypes.GET_RANDOM_PRODUCT,
      data
    });
  };
}
