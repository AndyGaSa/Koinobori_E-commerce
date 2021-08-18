import axios from 'axios';
import actionTypes from './action.types';

export default function loadStocks() {
  return async (dispatch) => {
    const { data } = await axios('https://my-kinobori-api.herokuapp.com/stock');

    dispatch({
      type: actionTypes.LOAD_STOCK,
      payload: data
    });
  };
}
