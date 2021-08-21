import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadCountries() {
  return async (dispatch) => {
    const { data } = await axios('https://restcountries.eu/rest/v2/all');
    dispatch({
      type: actionTypes.LOAD_COUNTRIES,
      data,
    });
  };
}
