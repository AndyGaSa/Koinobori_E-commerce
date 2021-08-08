/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './types';

// const apiUrl = 'http://127.0.0.1:3001';

const fetchEvents = (events) => ({
  type: actionTypes.FETCH_EVENT,
  events
});

const fetchAllEvents = () => ((dispatch) => (
  axios.get('http://localhost:3001/events', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    responseType: 'json'
  })
    .then((response) => {
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
      dispatch(fetchUsers(response.data));
    })
    .catch((error) => { console.error(error); })
));

const fetchFaqs = (faqs) => ({
  type: actionTypes.FETCH_FAQ,
  faqs
});

const fetchAllFaqs = () => ((dispatch) => (
  axios.get('http://localhost:3001/faq', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    },
    responseType: 'json'
  })
    .then((response) => {
      dispatch(fetchFaqs(response.data));
    })
    .catch((error) => { console.error(error); })
));

const createEvent = (data) => ({
  type: actionTypes.CREATE_EVENT,
  data
});

const createNewEvent = (data) => (
  axios.post('http://localhost:3001/events', data)
  // .then((response) => {
  //   console.log(response.data);
  // })
  // .catch((error) => { console.error(error); })
);

export {
  fetchAllEvents, fetchAllUsers, fetchAllFaqs, createEvent, createNewEvent
};
