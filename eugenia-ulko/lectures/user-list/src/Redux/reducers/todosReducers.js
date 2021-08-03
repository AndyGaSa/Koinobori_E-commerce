import actionTypes from '../actions/action.types';

export default function usersReducer(userList = ['hello'], action) {
  let newUserList = userList;
  const newUser = { name: action.user };

  switch (action.type) {
    case actionTypes.CREATE_USER:
      newUserList = [...userList, newUser];
      break;

    case actionTypes.UPDATE_USER:
      newUserList[action.index] = action.user;
      newUserList = [
        ...newUserList
      ];
      break;

    case actionTypes.DELETE_USER:
      newUserList = userList.filter((user) => user !== action.user);
      break;

    default:

      break;
  }
  return newUserList;
}
