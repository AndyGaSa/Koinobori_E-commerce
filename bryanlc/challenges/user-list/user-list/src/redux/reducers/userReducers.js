import actionTypes from '../actions/action.typs';
import users from '../../constants/users.mock';

export default function userReducers(usersList = users, action) {
  let newUsersList = usersList;

  switch (action.type) {
    case actionTypes.CREATE_USER:
      newUsersList = [...usersList, action.user];
      break;
    case actionTypes.DELETE_USER:
      break;
    case actionTypes.UPDATE_USER:
      break;
    default:
      break;
  }

  return newUsersList;
}
