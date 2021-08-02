import axios from 'axios';
// import { useSelector } from 'react-redux';
import actionType from './action.type';

export default function loadDrivers() {
  return async (dispatch) => {
    const { data: { MRData: { DriverTable: { Drivers } } } } = await axios('http://ergast.com/api/f1/2021/drivers.json');

    dispatch({
      type: actionType.LOAD_DRIVERS,
      drivers: Drivers
    });
  };
}
export function loadDriversPts() {
  return async (dispatch) => {
    const { data: { MRData: { RaceTable: { Races } } } } = await axios('https://ergast.com/api/f1/2021/results.json?limit=220&offset=0');

    dispatch({
      type: actionType.LOAD_DRIVERS_PTS,
      points: Races
    });
  };
}
/*
export function loadPilots() {
  return fetch('http://ergast.com/api/f1/2021/drivers.json')
    .then((response) => response.json())
    .then((MRData) => MRData)
    .then((DriverTable) => DriverTable.MRData.DriverTable.Drivers)
    .then((drivers) => {
      for (let i = 0; i < drivers.length; i += 1) {
        fetch(`http://ergast.com/api/f1/2021/drivers/${drivers[i].driverId}/results.json`)
          .then((response) => console.log(response.json()));
      }
    });
}
loadPilots();
*/
