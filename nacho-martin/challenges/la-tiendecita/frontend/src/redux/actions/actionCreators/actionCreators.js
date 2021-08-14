import actionTypes from '../actionTypes/actionTypes';

export function loadProducts() {
  return async (dispatch) => {
    const data = fetch.get('localhost//:5001/la_tiendecita/api');

    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data
    });
  };
}

export function buyProducts() {
  return async (dispatch) => {
    const data = fetch.get('localhost//:5001/latiendecita/api/cart');
    dispatch({
      type: actionTypes.BUY_PRODUCTS,
      data
    });
  };
}
