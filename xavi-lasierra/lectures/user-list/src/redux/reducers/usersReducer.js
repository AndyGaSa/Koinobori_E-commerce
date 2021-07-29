import actionTypes from '../actions/action.types';
import usersMock from '../../constants/users.mock';

function usersReducer(users = usersMock, action) {
  const newUsers = users;
  switch (action.type) {
    case actionTypes.CREATE_USER:
      break;
    case actionTypes.DELETE_USER:
      break;
    case actionTypes.UPDATE_USER:
      break;
    default:
      break;
  }
  return newUsers;
}

export default usersReducer;
