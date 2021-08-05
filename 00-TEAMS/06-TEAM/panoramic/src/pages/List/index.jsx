import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavArtists } from '../../redux/actions/actionCreatorsFavList';

export default function List() {
  const dispatch = useDispatch();
  const favArtist = useSelector((store) => store.favouriteArtists);

  return (
    <>
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
