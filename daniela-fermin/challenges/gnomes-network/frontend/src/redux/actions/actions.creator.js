/* eslint-disable camelcase */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadGnomes() {
  return async (dispatch) => {
    const { data } = await axios.get('/gnomesApi/gnomes');
    dispatch({
      type: actionTypes.LOAD_GNOMES,
      data
    });
  };
}

export function loadCurrentGnome(gnome_id) {
  return async (dispatch) => {
    const { data } = await axios.get(`/gnomesApi/gnomes/${gnome_id}`);
    dispatch({
      type: actionTypes.LOAD_CURRENT_GNOME,
      currentGnome: data
    });
  };
}
