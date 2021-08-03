import axios from 'axios';
import actionType from './action.type';


export function loadRacesData() {
  return async (dispatch) => {
    const { data: { MRData: { RaceTable: { Races } } } } = await axios('https://ergast.com/api/f1/2021/results.json?limit=220&offset=0');

    dispatch({
      type: actionType.LOAD_RACES,
      races: Races
    });
  };
}

export function loadDriverStandings() {
  return async (dispatch) => {
    const { data: { MRData: { StandingsTable: { StandingsLists } } } } = await axios('http://ergast.com/api/f1/current/driverStandings.json');

    dispatch({
      type: actionType.LOAD_DRIVER_STANDINGS,
      drivers: StandingsLists
    });
  };
}

export function loadConstructorStandings() {
  return async (dispatch) => {
    const data = await axios('https://ergast.com/api/f1/current/constructorStandings.json');
    dispatch({
      type: actionType.LOAD_CONSTRUCTOR_STANDINGS,
      constructors: data.data.MRData.StandingsTable.StandingsLists
    });
  };
}
