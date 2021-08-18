import actionTypes from '../actions/actionTypes';

export default function userReducer(user = {}, action) {
  let newUser = [];

  if (action.type === actionTypes.LOAD_PERSONS) {
    newUser = action.data;
  } else {
    newUser = user;
  }
  return newUser;
}
