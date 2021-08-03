/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './activities.types';

const fetchActivities = (activities) => {
  console.log(activities);
  return {
    type: actionTypes.FETCH_ACTIVITIES,
    activities
  };
};

const fetchAllActivities = () => ((dispatch) => (
  axios.get('http://localhost:3001/activities')
    .then((response) => {
      console.log(response);
      dispatch(fetchActivities(response.data));
    })
    .catch((error) => { console.error(error); })
)
);
export default fetchAllActivities;
