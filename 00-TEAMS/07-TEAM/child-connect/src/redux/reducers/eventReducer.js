import { createNewEvent } from '../actions';
import actionTypes from '../actions/types';

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENT:
      return action.events;
    case actionTypes.CREATE_EVENT:
      createNewEvent(action.data);
      return [...state, action.data];
    default:
      return state;
  }
};

export default eventReducer;
