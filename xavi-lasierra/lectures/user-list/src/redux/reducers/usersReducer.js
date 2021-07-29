import actionTypes from '../actions/action.types';
import usersMock from '../../constants/users.mock';

function usersReducer(users = usersMock, action) {
  let newUsers = users;
  switch (action.type) {
    case actionTypes.CREATE_USER:
      newUsers = [...newUsers, {
        username: action.newUsername.trim(),
        id: Math.max.apply(this, newUsers.map(({ id }) => +id)) + 1
      }];
      break;
    case actionTypes.DELETE_USER:
      newUsers = newUsers.filter(({ id }) => id !== action.userId);
      break;
    case actionTypes.UPDATE_USER:
      newUsers = newUsers
        .map((user) => (user.id === action.userData.id ? { ...user, ...action.userData } : user));
      break;
    default:
      break;
  }
  return newUsers;
}

export default usersReducer;
