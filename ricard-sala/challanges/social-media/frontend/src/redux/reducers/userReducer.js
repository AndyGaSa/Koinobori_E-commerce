import actionTypes from '../actions/actionTypes';

export default function userReducer(users = [], action) {
  let newUsers = users;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newUsers = action.data;
      break;
    default:
      break;
  }
  return newUsers;
}
