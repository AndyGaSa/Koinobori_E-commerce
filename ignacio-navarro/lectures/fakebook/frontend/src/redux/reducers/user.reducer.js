import actionTypes from '../actions/action.types';

export default function userReducer(user = [], action) {
  let newUser = user;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newUser = action.data;
      break;
    case actionTypes.UPDATE_USER:
      console.log(action.data);
      newUser = action.data;
      break;

    default:
      break;
  }
  return newUser;
}
