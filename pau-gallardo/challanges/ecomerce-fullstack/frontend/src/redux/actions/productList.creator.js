import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadProductList() {
  return async (dispatch) => {
    const { data } = await axios('/api/products');

    dispatch({
      type: actionTypes.LOAD_PRODUCT_LIST,
      productList: data,
    });
  };
}
