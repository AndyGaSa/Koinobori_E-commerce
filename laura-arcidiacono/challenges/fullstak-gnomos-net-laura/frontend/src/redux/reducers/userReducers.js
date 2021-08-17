import actionTypes from '../actions/actionTypes';

export default function userReducers(users = {}, action) {
  if (action.type === actionTypes.LOAD_USERS) {
    return action.data[0];
  }
  return users;
}
