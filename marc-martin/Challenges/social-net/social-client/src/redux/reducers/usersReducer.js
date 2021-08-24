import actionTypes from '../actions/actionTypes';

export default function usersReducer(users = [], action) {
  let nextUsers = users;
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      nextUsers = action.data;
      break;
    default:
      break;
  }

  return nextUsers;
}
