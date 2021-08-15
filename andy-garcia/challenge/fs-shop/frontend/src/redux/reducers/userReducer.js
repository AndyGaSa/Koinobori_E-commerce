import actionTypes from '../actions/types';

const userReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducers;
