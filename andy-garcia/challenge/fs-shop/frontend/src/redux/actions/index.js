import axios from 'axios';
import actionTypes from './types';

const setUserAccount = (userData) => ({
  type: actionTypes.FETCH_USER,
  userData,
});

const fetchUserAccount = (user) => ((dispatch) => (
  axios.post('http://localhost:5000/api/user', user)
    .then((response) => {
      dispatch(setUserAccount(response));
    })
    .catch((error) => { console.error(error); })
));

const funcionDeRelleno = () => {
  console.log('De relleno');
};

export {
  fetchUserAccount,
  funcionDeRelleno,
};
