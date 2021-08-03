import FETCH_EVENT from '../actions/events.types';

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENT:
      return action.events;
    default:
      return state;
  }
};

export default eventReducer;
