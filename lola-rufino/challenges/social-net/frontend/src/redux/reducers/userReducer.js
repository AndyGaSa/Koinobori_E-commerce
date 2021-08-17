import actionTypes from '../actions/actionTypes';

export default function usersReducer(user = {}, action) {
  let newUser = user;
  if (action.type === actionTypes.LOAD_USER) {
    newUser = action.data;
    return newUser;
  }
  return newUser;
}
