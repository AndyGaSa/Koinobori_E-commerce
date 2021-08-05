import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavArtists } from '../../redux/actions/actionCreatorsFavList';

export default function FavouritList() {
  const dispatch = useDispatch();
  const favArtist = useSelector((store) => store.favouriteArtists);

  return (
    <>
      <ul>
        {favArtist.map((artist) => (
          <li data-testid="list-item">
            {artist.name}
            <button
              data-testid="delete-button"
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
