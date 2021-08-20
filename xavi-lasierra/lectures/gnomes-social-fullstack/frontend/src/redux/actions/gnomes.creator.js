import axios from 'axios';
import actionTypes from './gnomes.actions';

export default function findGnomes(filter) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/gnomes?name_inc=${filter}`);

      dispatch({
        type: actionTypes.LOAD_GNOMES,
        data
      });
    } catch (error) {
      // TODO error
    }
  };
}
