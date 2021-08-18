/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import requestTypes from '../../utils/requestTypes';
import actionTypes from './currentgnomeTypes';
import loadGnomes from './gnomeCreators';

const {
  ADD_FRIEND,
  ADD_ADVERSARY,
  REMOVE_FRIEND,
  REMOVE_ADVERSARY
} = requestTypes;

export function loadCurrentGnome(gnomeId) {
  return async (dispatch) => {
    const { data } = await axios.get((`/api/gnomes/${gnomeId}`));
    dispatch({
      type: actionTypes.LOAD_CURRENT_GNOME,
      currentGnome: data
    });
    dispatch(loadGnomes());
  };
}

export function addFriend(gnomeId, currentRelated, id, action) {
  const newRelated = [...currentRelated, id];
  let relation;

  if (action === ADD_FRIEND) {
    relation = { friends: newRelated };
  } else if (action === ADD_ADVERSARY) {
    relation = { adversaries: newRelated };
  }
  return async (dispatch) => {
    await axios.put(`/api/gnomes/${gnomeId}`, relation);
    dispatch(loadCurrentGnome(gnomeId));
  };
}

export function removeRelated(gnomeId, currentRelated, id, action) {
  const newRelated = currentRelated.filter((related) => related._id !== id);
  let relation;

  if (action === REMOVE_FRIEND) {
    relation = { friends: newRelated };
  } else if (action === REMOVE_ADVERSARY) {
    relation = { adversaries: newRelated };
  }
  return async (dispatch) => {
    await axios.put(`/api/gnomes/${gnomeId}`, relation);
    dispatch(loadCurrentGnome(gnomeId));
  };
}
