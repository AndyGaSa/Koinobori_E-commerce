/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadUser() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/user');
    console.log('hola ', data);
    dispatch({
      type: actionTypes.LOAD_USER,
      data,
    });
  };
}
// export default function loadUser() {
//   return async (dispatch) => {
//     const { data } = await axios.get('/api/user');
//     console.log('hola ', data);
//     dispatch({
//       type: actionTypes.LOAD_USER,
//       data,
//     });
//   };
// }
