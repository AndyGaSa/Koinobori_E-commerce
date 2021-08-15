import axios from 'axios';
import actionTypes from './types';

const setUserAccount = (userData) => ({
  type: actionTypes.FETCH_USER,
  userData,
});

const fetchUserAccount = ({ name }) => {
  console.log(name);
  return ((dispatch) => (
    axios.post('http://localhost:5000/api/user', { name })
      .then((response) => {
        console.log(response.data);
        dispatch(setUserAccount(response.data));
      })
      .catch((error) => { console.error(error); })
  ));
};

const funcionDeRelleno = () => {
  console.log('De relleno');
};

export {
  fetchUserAccount,
  funcionDeRelleno,
};
