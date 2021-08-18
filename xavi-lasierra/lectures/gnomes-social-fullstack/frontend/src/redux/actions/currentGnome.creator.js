import axios from 'axios';

import actionTypes from './currentGnome.actions';

export default function getGnomeById(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/gnomes/${id}`);

    dispatch({
      type: actionTypes.LOAD_GNOME,
      data
    });
  };
}
