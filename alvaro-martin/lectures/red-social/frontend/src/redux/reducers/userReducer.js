import actionTypes from '../actions/user.actioTypes';

export default function userReducer(users = [], action) {
  let nextUsers = users;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      nextUsers = action.data;
      break;
    case actionTypes.SUBMIT_USER:
      nextUsers = action.data;
      break;
    default:
      break;
  }
  return nextUsers;
}
