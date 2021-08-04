/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './types';

// const apiUrl = 'http://127.0.0.1:3001';

const fetchEvents = (events) => {
  console.log(events);
  return {
    type: actionTypes.FETCH_EVENT,
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

const fetchUsers = (users) => ({
  type: actionTypes.FETCH_USERS,
  users
});

const fetchAllUsers = () => ((dispatch) => (
  axios.get('http://localhost:3001/users', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    responseType: 'json'
  })
    .then((response) => {
      dispatch(fetchUsers(response));
    })
));

export { fetchAllEvents, fetchAllUsers };
