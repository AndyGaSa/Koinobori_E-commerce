/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
/* import actionTypes from './events.types'; */

// const apiUrl = 'http://127.0.0.1:3001';

/* const fetchEvents = (events) => {
  console.log(events);
  return {
    type: actionTypes.FETCH_EVENT,
    events
  };
}; */

const fetchAllEvents = () => ((dispatch) => (
  axios.get('http://localhost:3001/events')
    .then((response) => {
      console.log(response);
      /* dispatch(fetchEvents(response.data)); */
    })
    .catch((error) => { console.error(error); })
));

export default fetchAllEvents;
