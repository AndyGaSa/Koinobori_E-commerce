/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

export default function loadDetails(track_id) {
  debugger;
  return async (dispatch) => {
    const response = await fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=callback&track_id=${track_id}&apikey=ac9bd389d8c264b9d3fe211a16c14560`);
    const chart = await response.text();
    const { message: { body: { lyrics } } } = await JSON.parse(chart.substring(9, (chart.length - 2)));
    console.log(lyrics);
    dispatch({
      type: actionTypes.LOAD_DETAILS,
      lyrics
    });
  };
}
