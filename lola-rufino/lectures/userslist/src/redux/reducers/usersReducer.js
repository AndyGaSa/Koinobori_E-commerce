import actionTypes from '../actions/action.types';
import usersMock from '../../constants/usersMock';

// action is {type, data}

export default function usersReducer(usersList = usersMock, action) {
  const newUsersList = usersList;
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      newUsersList;
      break;

    case actionTypes.UPDATE_TODO:
      newUsersList;
      break;

    case actionTypes.DELETE_TODO:
      newUsersList;
      break;

    default:
      break;
  }

  return newUsersList;
}
