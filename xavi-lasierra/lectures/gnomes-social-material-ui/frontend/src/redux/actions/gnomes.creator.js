import axios from 'axios';
import actionTypes from './gnomes.actions';
import notificationTypes from './notifications.actions';

export function findGnomes(filter) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/gnomes?name_inc=${filter}`);

      dispatch({
        type: actionTypes.LOAD_GNOMES,
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

export function clearGnomes() {
  return {
    type: actionTypes.CLEAR_GNOMES
  };
}
