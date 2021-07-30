import actionTypes from '../actions/action.types';
import usersMock from '../../constants/users.mock';

export default function usersReducer(users = usersMock, action) {
  let newState;

  switch (action.type) {
    case actionTypes.ADD_USER: {
      const newId = (users.reduce((acc, cV) => (acc > cV.id ? acc : cV.id), 0)) + 1;
      newState = [...users, { id: newId, name: action.userName }];
      break;
    }
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
          return userModified;
        }
        return user;
      });
      break;
    case actionTypes.SEARCH_USER:
      newState = users.filter((user) => user.id !== action.user.id);
      break;
    default:
      newState = users;
      break;
  }

  return newState;
}
