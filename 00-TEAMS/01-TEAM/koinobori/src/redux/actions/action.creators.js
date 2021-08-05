import axios from 'axios';
import actionTypes from './action.types';

export function createStock(stock) {
  return {
    type: actionTypes.CREATE_STOCK,
    stock
  };
}

export function deleteStock(stock) {
  return {
    type: actionTypes.DELETE_STOCK,
    stock
  };
}

export function updateStock(stock, index) {
  return {
    type: actionTypes.UPDATE_STOCK,
    stock,
    index
  };
}

export function loadStocks() {
  return async (dispatch) => {
    const { data } = await axios('https://my-kinobori-api.herokuapp.com/stock');

    dispatch({
      type: actionTypes.LOAD_STOCK,
      payload: data
    });
  };
}
