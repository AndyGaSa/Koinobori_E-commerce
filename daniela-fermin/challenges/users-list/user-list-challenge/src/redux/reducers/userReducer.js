import usersMock from '../../constants/users.const';
import actionTypes from '../actions/actionTypes';

export default function usersReducer(users = usersMock, action) {
  let newState;
  switch (action.type) {
    case actionTypes.ADD_USER:
      newState = [...users, action.user];
      break;
    case actionTypes.DELETE_USER:
      newState = users.filter((user) => user.id !== action.user.id);
      break;

    case actionTypes.UPDATE_USER:
      newState = users.map((user) => (user.id === action.user.id
        ? { ...user, ...action.user }
        : user));
      break;

    default:
      newState = users;
      break;
  }
  return newState;
}
