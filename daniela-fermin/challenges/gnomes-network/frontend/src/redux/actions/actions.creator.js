/* eslint-disable no-underscore-dangle */
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

export function addRelated(gnome_id, currentRelated, id, action) {
  const newRelated = [...currentRelated, id];
  let relation;
  if (action === actionTypes.ADD_FRIEND) {
    relation = { friends: newRelated };
  } else if (action === actionTypes.ADD_ADVERSARY) {
    relation = { adversaries: newRelated };
  }
  return async (dispatch) => {
    await axios.put(`/gnomesApi/gnomes/${gnome_id}`, relation);
    dispatch(loadCurrentGnome(gnome_id));
  };
}

export function removeRelated(gnome_id, currentRelated, id, action) {
  const newRelated = currentRelated.filter((related) => related._id !== id);
  let relation;
  if (action === actionTypes.REMOVE_FRIEND) {
    relation = { friends: newRelated };
  } else if (action === actionTypes.REMOVE_ADVERSARY) {
    relation = { adversaries: newRelated };
  }
  return async (dispatch) => {
    await axios.put(`/gnomesApi/gnomes/${gnome_id}`, relation);
    dispatch(loadCurrentGnome(gnome_id));
  };
}
