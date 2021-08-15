import actionTypes from '../actions/types';

const userReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.logUser;
    default:
      return state;
  }
};

export default userReducers;
