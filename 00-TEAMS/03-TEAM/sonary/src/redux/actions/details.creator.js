/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

export default function loadDetails(track_id) {
  return async (dispatch) => {
    const response = await fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=callback&track_id=${track_id}&apikey=ac9bd389d8c264b9d3fe211a16c14560`);
    let mod = await response.text();
    mod = await mod.substring(9, (mod.length - 2));
    const { message: { body: { lyrics } } } = await JSON.parse(mod);
    dispatch({
      type: actionTypes.LOAD_DETAILS,
      details: lyrics
    });
  };
}
