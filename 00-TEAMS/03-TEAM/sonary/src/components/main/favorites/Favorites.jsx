/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import actionTypes from '../../../redux/actions/actionTypes';

export default function Favorites() {
  const { isAuthenticated } = useAuth0();
  const favoritesL = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  const [favorites, setCurrentTrack] = useState(favoritesL);
  useEffect(() => {
    setCurrentTrack(favoritesL);
  }, [favoritesL]);

  function trackChange(event, trackId) {
    let updatedFavorites;
    setCurrentTrack(
      updatedFavorites = favorites.map((track) => (track.track_id === trackId
        ? { ...track, [event.target.name]: event.target.value } : track))
    );
    return updatedFavorites;
  }

  function updateTrack() {
    dispatch({
      type: actionTypes.UPDATE_FAVORITE,
      favorites
    });
  }
  return (
    isAuthenticated
      ? (
        <div>
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
                        name="track_name"
                        placeholder="track_name"
                        value={track.track_name}
                        onChange={(event) => trackChange(event, track.track_id)}
                      />
                    </li>
                    <li>
                      Artist name:
                      {' '}
                      <input
                        type="text"
                        name="artist_name"
                        placeholder="artist_name"
                        value={track.artist_name}
                        onChange={(event) => trackChange(event, track.track_id)}
                      />

                    </li>
                    <button
                      type="button"
                      onClick={() => dispatch({
                        type: actionTypes.TOGGLE_FAVORITES,
                        track
                      })}
                    >
                      Add/Remove

                    </button>
                    <button type="button" id={track.track_id} onClick={() => updateTrack()}>Update</button>
                  </ul>
                </li>
              ))
          }

          </ul>

        </div>
      )
      : (
        <div>
          <p>Log In</p>
        </div>
      )

  );
}
