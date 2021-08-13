/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

export function loadDashboard() {
  return async (dispatch) => {
    const response = await fetch('https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&page_size=5&chart_name=top&country=wx&f_has_lyrics=1&apikey=8ba90f0cc799ec2725591826448e1d42');
    let mod = await response.text();
    mod = mod.substring(9, (mod.length - 2));
    const { message: { body: { track_list } } } = await JSON.parse(mod);
    dispatch({
      type: actionTypes.LOAD_DASHBOARD,
      dashboard: track_list
    });
  };
}
