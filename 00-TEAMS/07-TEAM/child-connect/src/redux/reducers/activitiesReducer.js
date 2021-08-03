import FETCH_ACTIVITIES from '../actions/activities.types';

const activitiesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return action.activities;

    default:
      return state;
  }
};

export default activitiesReducer;
