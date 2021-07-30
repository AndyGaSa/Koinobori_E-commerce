/* eslint-disable no-debugger */
import usersMock from '../../constants/users.mock';
import actionTypes from '../actions/actionTypes';

export default function usersReducer(users = usersMock, action) {
  let newState;

  switch (action.type) {
    case actionTypes.LOAD_USERS:
      newState = actionTypes.users;
      break;

    case actionTypes.ADD_USER:
      debugger;
      newState = [...users, action.user];
      break;

    case actionTypes.DELETE_USER:
      newState = users.filter((user) => user.id !== action.user.id);
      break;

    case actionTypes.UPDATE_USER:
      newState = users.map((user) => ((user.id === action.user.id)
        ? {
          ...user,
          ...action.user
        }
        : user));
      break;

    default:
      newState = users;
      break;
  }

  return newState;
}
