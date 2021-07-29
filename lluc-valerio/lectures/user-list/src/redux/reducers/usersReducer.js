import actionTypes from '../actions/action.types';
import usersMock from '../../constants/users.mock';

export default function usersReducer(users = usersMock, action) {
  let newState;

  switch (action.type) {
    case actionTypes.ADD_USER:
      newState = [...users, { name: action.userName }];
      break;
    case actionTypes.DELETE_USER:
      newState = users.filter((user) => user.id !== action.user.id);
      break;
    case actionTypes.UPDATE_USER:
      newState = users.map((user) => {
        let userModified;
        if (user.id === action.user.id) {
          userModified = {
            ...user,
            ...action.user
          };
        }
        return userModified;
      });
      break;
    default:
      newState = users;
      break;
  }

  return newState;
}
