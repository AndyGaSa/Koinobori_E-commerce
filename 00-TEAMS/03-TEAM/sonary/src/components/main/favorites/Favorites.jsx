/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actionTypes from '../../../redux/actions/actionTypes';

export default function Favorites() {
  const favorites = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!favorites.length) {
      dispatch({
        type: actionTypes.LOAD_FAVORITES
      });
    }
  }, []);
  function updateTrack(track) {
    dispatch({
      type: actionTypes.UPDATE_FAVORITE,
      track
    });
  }

  return (
    <main>
      <ul>
        {
              favorites.map((track) => (
                <li key={track.track_id}>
                  <ul>
                    <li>
                      Track name:
                      {' '}
                      <input
                        type="text"
                        placeholder={track.track_name}
                        value={track.track_name}
                      />
                      {track.track_name}
                    </li>
                    <li>
                      Artist name:
                      {' '}
                      <input
                        type="text"
                        placeholder={track.artist_name}
                        value={track.artist_name}
                      />

                    </li>
                    <button type="button" id={track.track_id} onClick={updateTrack(track)}>Update</button>
                  </ul>
                </li>
              ))
          }

      </ul>

    </main>
  );
}
