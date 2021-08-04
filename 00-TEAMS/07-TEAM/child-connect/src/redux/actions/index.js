/* eslint-disable no-console */
import axios from 'axios';
import FETCH_EVENT from './types';

// const apiUrl = 'http://127.0.0.1:3001';

const fetchEvents = (events) => {
  console.log(events);
  return {
    type: FETCH_EVENT,
    events
  };
};

const fetchAllEvents = () => ((dispatch) => (
  axios.get('http://localhost:3001/events', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    responseType: 'json'
  })
    .then((response) => {
      console.log(response);
      dispatch(fetchEvents(response.data));
    })
    .catch((error) => { console.error(error); })
));

export default fetchAllEvents;
