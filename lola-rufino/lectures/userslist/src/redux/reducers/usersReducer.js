import actionTypes from '../actions/action.types';
import usersMock from '../../constants/usersMock';

// action is {type, data}

export default function usersReducer(usersList = usersMock, action) {
  let newUsersList = usersList;
  const newUser = { name: action.data };
  switch (action.type) {
    case actionTypes.CREATE_USER:
      newUsersList = [...usersList, newUser];
      break;

    case actionTypes.UPDATE_USER:
      break;

    case actionTypes.DELETE_USER:
      newUsersList = newUsersList.filter((user) => user !== action.data);
      break;

    default:
      break;
  }

  return newUsersList;
}
