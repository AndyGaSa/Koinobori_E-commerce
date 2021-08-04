/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

export function loadDashboard() {
  return async (dispatch) => {
    const response = await fetch('https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&page_size=10&country=us&f_has_lyrics=f_has_lyrics&apikey=ac9bd389d8c264b9d3fe211a16c14560');
    let mod = await response.text();
    mod = await mod.substring(9, (mod.length - 2));
    const { message: { body: { track_list } } } = await JSON.parse(mod);
    console.log(track_list);
    dispatch({
      type: actionTypes.LOAD_DASHBOARD,
      dashboard: track_list
    });
  };
}
