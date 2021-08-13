import actionTypes from './sneakers.types';
import sneakers from '../../sneakers-data/data';

export default function loadSneakers() {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOAD_SNEAKERS,
      data: sneakers,
    });
  };
}
