/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import actionTypes from '../../../redux/actions/actionTypes';

export default function Favorites() {
  const favoritesL = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  const [favorites, setCurrentTrack] = useState(favoritesL);
  const { user, isLoading } = useAuth0();
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
    <div className="favorites">
      <h2 className="favorites__title">{user.name}</h2>
      <ul className="favorites__list">
        {
              favorites.map((track) => (
                <li className="favorites__track" key={track.track_id}>
                  <ul>
                    <li><figure className="favorites__thumbnail" style={{ backgroundColor: `#${randomColor()}` }} /></li>
                  </ul>
                  <ul className="favorites__information">
                    <li>
                      <input
                        className="information__track"
                        type="text"
                        name="track_name"
                        placeholder="track_name"
                        value={track.track_name}
                        onChange={(event) => trackChange(event, track.track_id)}
                      />
                    </li>
                    <li>
                      <input
                        className="information__artist"
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
