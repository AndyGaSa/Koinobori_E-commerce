/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypes from '../../../redux/actions/actionTypes';

export default function Favorites() {
  const favoritesL = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  const [favorites, setCurrentTrack] = useState(favoritesL);
  useEffect(() => {
    setCurrentTrack(favoritesL);
  }, [favoritesL]);
  function toggleFav(track) {
    dispatch({
      type: actionTypes.TOGGLE_FAVORITES,
      track
    });
  }

  function getFavClass(track) {
    const isFav = favorites.some((song) => song === track);
    return isFav ? 'list__button--fav' : '';
  }

  function trackChange(event, trackId) {
    let updatedFavorites;
    setCurrentTrack(
      updatedFavorites = favorites.map((track) => (track.track_id === trackId
        ? { ...track, [event.target.name]: event.target.value } : track))
    );
    return updatedFavorites;
  }

  return (
    <div>
      <h1 className="profile__title">Profile</h1>
      <ul className="favorites">
        {
              favorites.map((track) => (
                <li key={track.track_id}>
                  <ul className="favorites__track">
                    <li>
                      <input
                        className="track__name"
                        type="text"
                        name="track_name"
                        placeholder="track_name"
                        value={track.track_name}
                        onChange={(event) => trackChange(event, track.track_id)}
                      />
                    </li>
                    <li>
                      <input
                        className="track__artist"
                        type="text"
                        name="artist_name"
                        placeholder="artist_name"
                        value={track.artist_name}
                        onChange={(event) => trackChange(event, track.track_id)}
                      />
                    </li>
                  </ul>
                  <button
                    type="button"
                    className={`list__button ${getFavClass(track)}`}
                    onClick={() => toggleFav(track)}
                  >
                    +
                  </button>
                </li>
              ))
          }

      </ul>

    </div>

  );
}
