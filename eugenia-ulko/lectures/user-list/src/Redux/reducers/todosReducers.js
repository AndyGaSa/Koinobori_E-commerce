import actionTypes from '../actions/action.types';

export default function usersReducer(userList = ['hello'], action) {
  let newUserList = userList;
  switch (action.type) {
    case actionTypes.CREATE_USER:
      newUserList = [...userList, action.user];
      break;

    case actionTypes.UPDATE_USER:
      newUserList[action.index] = action.user;
      newUserList = [
        ...newUserList
      ];
      break;

    case actionTypes.DELETE_TODO:
      newUserList = userList.filter((user) => user !== action.user);
      break;

    default:

      break;
  }
  return newUserList;
}
