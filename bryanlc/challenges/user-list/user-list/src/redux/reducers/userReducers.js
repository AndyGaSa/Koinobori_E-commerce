import actionTypes from '../actions/action.typs';
import users from '../../constants/users.mock';

export default function userReducers(usersList = users, action) {
  let newUsersList = usersList;
  const newUser = { name: action.user };
  switch (action.type) {
    case actionTypes.CREATE_USER:
      newUsersList = [...usersList, newUser];
      break;
    case actionTypes.DELETE_USER:
      newUsersList = newUsersList.filter((user) => user !== action.data);
      break;
    case actionTypes.UPDATE_USER:
      break;
    default:
      break;
  }

  return newUsersList;
}
