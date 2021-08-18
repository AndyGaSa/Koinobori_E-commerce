import actionTypes from './actionTypes';

export default function loadUser(user) {
  return {
    type: actionTypes.LOAD_USER,
    user,
  };
}
