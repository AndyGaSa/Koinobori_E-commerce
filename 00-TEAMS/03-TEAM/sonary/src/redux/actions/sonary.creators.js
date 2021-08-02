/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

export function loadChart() {
  return async (dispatch) => {
    const response = await fetch('https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&country=us&apikey=ac9bd389d8c264b9d3fe211a16c14560');
    const chart = await response.text();
    const { message: { body: { track_list } } } = await JSON.parse(chart.substring(9, (chart.length - 2)));
    dispatch({
      type: actionTypes.LOAD_SONARY,
      chart: track_list
    });
  };
}
