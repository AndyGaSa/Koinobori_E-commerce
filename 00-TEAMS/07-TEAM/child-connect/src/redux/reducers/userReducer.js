import actionTypes from '../actions/types';

const userReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return action.users;
    default:
      return state;
  }
};

export default userReducers;
