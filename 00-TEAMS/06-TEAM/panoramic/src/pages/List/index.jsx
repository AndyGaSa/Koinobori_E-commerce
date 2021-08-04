import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFavArtists, deleteFavArtists, addFavArtist } from '../../redux/actions/actionCreatorsFavList';
import getSpotifyToken from '../../redux/actions/actionCreators';

export default function List() {
  const dispatch = useDispatch();
  const favArtist = useSelector((store) => store.favouriteArtists);
  useEffect(() => {
    getSpotifyToken();
    dispatch(loadFavArtists());
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(addFavArtist())}
      >
        Add Favourite Artist

      </button>
      <ul>
        {favArtist.map((artist) => (
          <li>
            {artist.name}
            <button
              type="button"
              onClick={() => dispatch(deleteFavArtists(artist))}
            >
              x

            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
