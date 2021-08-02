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

export function loadstocksWithAsync() {
  return async (dispatch) => {
    const response = await fetch('https://my-kinobori-api.herokuapp.com/clothes');
    const stocks = await response.json();

    dispatch({
      type: actionTypes.LOAD_STOCK,
      stocks
    });
  };
}

export function loadstocksWithPromise() {
  return (dispatch) => {
    fetch('https://my-kinobori-api.herokuapp.com/clothes')
      .then((response) => response.json())
      .then((stocks) => dispatch({
        type: actionTypes.LOAD_STOCK,
        stocks
      }));
  };
}
