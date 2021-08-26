import axios from 'axios';
import taskTypes from './taskTypes';

export const readTasks = () => async (dispatch) => {
  const { data } = await axios.get('api/tasks'); // ID.
  dispatch({
    type: taskTypes.READ_LIST,
    data,
  });
};

export const createTasks = () => async (dispatch) => {
  const { data } = await axios.post('api/tasks');
  dispatch({
    type: taskTypes.CREATE_LIST,
    data,
  });
};

export const updateTasks = () => async (dispatch) => {
  const { data } = await axios.put('api/tasks'); // ID.
  dispatch({
    type: taskTypes.UPDATE_LIST,
    data,
  });
};

export const deleteTasks = () => async (dispatch) => {
  const { data } = await axios.delete('api/tasks'); // ID.
  dispatch({
    type: taskTypes.DELETE_LIST,
    data,
  });
};
