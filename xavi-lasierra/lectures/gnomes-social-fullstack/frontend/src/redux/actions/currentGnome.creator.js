import axios from 'axios';

import actionTypes from './currentGnome.actions';

export function getGnomeById(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/gnomes/${id}`);

    dispatch({
      type: actionTypes.LOAD_GNOME,
      data
    });
  };
}

export function clearCurrentGnome() {
  return {
    type: actionTypes.LOAD_GNOME,
    data: {}
  };
}
