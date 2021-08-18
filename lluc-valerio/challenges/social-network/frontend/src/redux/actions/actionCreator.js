import axios from 'axios';
import actionTypes from './actionTypes';

export function loadPerson() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/user/');
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch({
      type: actionTypes.LOAD_PERSONS,
      data
    });
  };
}

export function setUser(person) {
  return async (dispatch) => {
    // const { data } = await axios.get('/api/user/');
    // eslint-disable-next-line no-console
    console.log(person);
    dispatch({
      type: actionTypes.LOAD_USER,
      data: person
    });
  };
}
