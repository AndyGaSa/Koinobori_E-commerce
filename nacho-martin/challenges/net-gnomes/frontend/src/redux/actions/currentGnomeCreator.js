import axios from 'axios';
import actionTypes from './currentgnomeTypes';

export default function loadCurrentGnome(gnomeId) {
  return async (dispatch) => {
    const { data } = await axios.get((`/api/gnomes/${gnomeId}`));
    dispatch({
      type: actionTypes.LOAD_CURRENT_GNOME,
      currentGnome: data
    });
  };
}
