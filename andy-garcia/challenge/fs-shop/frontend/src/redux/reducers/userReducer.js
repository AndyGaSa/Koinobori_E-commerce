import actionTypes from '../actions/types';

const userReducers = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.userData;
    default:
      return state;
  }
};

export default userReducers;
