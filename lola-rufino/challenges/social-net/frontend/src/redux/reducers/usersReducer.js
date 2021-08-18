import actionTypes from '../actions/actionTypes';

export default function usersReducer(users = [], action) {
  let newUsers = users;
  if (action.type === actionTypes.LOAD_USERS) {
    newUsers = action.data;
    return newUsers;
  }
  return newUsers;
}
