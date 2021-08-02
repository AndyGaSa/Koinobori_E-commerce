import axios from 'axios';
import actionTypes from './action.types';

export default function loadToDos() {
  return async (dispatch) => {
    const { data: { MRData: { DriverTable: { Drivers } } } } = await axios('http://ergast.com/api/f1/drivers.json');

    dispatch({
      type: actionTypes.LOAD_TODO,
      toDos: Drivers
    });
  };
}

export function loadToDosWithAsync() {
  return async (dispatch) => {
    const response = await fetch('http://ergast.com/api/f1/drivers.json');
    const toDos = await response.json();
    const data = await toDos;

    dispatch({
      type: actionTypes.LOAD_TODO,
      data: data.MRData.DriverTable.Drivers
    });
  };
}
export function loadToDosWithPromise() {
  return (dispatch) => {
    fetch('http://ergast.com/api/f1/drivers.json')
      .then((response) => response.json())
      .then((data) => dispatch({

        type: actionTypes.LOAD_TODO,
        toDos: data.MRData.DriverTable.Drivers
      }));
  };
}
