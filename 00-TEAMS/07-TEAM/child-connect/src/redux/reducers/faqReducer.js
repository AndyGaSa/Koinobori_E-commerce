/* eslint-disable no-console */
import actionTypes from '../actions/types';

const faqReducers = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.FETCH_FAQ:
      return action.faqs;
    default:
      return state;
  }
};

export default faqReducers;
