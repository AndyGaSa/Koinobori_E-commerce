import axios from 'axios';

import actionTypes from './currentGnome.actions';
import notificationTypes from './notifications.actions';

export function getGnomeById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/gnomes/${id}`);

      dispatch({
        type: actionTypes.LOAD_GNOME,
        data
      });
    } catch (error) {
      dispatch({
        type: notificationTypes.ERROR_GENERIC,
        data: 'Server error'
      });
    }
  };
}

export function printGnome(gnome) {
  return {
    type: actionTypes.LOAD_GNOME,
    data: gnome
  };
}

export function clearCurrentGnome() {
  return {
    type: actionTypes.LOAD_GNOME,
    data: {}
  };
}
