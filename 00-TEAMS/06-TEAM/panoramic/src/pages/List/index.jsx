import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadFavArtists from '../../redux/actions/actionCreatorsFavList';
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
      <ul>
        {favArtist.map((artist) => (
          <li>
            {artist.name}
            <button type="button">x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
