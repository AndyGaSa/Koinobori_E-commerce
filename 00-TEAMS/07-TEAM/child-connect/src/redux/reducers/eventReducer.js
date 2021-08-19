import { createNewEvent, deleteOneEvent } from '../actions';
import actionTypes from '../actions/types';

const eventReducer = (state = [], action) => {
  let newState = state;
  switch (action.type) {
    case actionTypes.FETCH_EVENT:
      return action.events;
    case actionTypes.CREATE_EVENT:
      createNewEvent(action.data);
      return [...state, action.data];
    case actionTypes.DELETE_EVENT:
      deleteOneEvent(action.event);
      newState = newState.filter((event) => event.id !== action.event);
      return newState;
    default:
      return state;
  }
};

export default eventReducer;
