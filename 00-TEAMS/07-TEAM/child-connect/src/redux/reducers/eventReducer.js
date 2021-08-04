import actionTypes from '../actions/types';

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENT:
      return action.events;
    default:
      return state;
  }
};

export default eventReducer;
