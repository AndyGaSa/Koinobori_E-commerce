import axios from 'axios';
import actionTypes from './actionTypes';

export function loadCountries() {
  return async (dispatch) => {
    const { data } = await axios('https://restcountries.eu/rest/v2/all');
    dispatch({
      type: actionTypes.LOAD_COUNTRIES,
      countries: data,
    });
  };
}
// eslint-disable-next-line no-unused-vars
export function randomCountry() {
  return (dispatch) => {
    const { data } = 'l';
    dispatch({
      type: actionTypes.LOAD_RANDOM,
      country: data,
    });
  };
}
