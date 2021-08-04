import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getSpotifyToken from '../../redux/actions/actionCreators';
import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';
import loadSearchedArtists from '../../redux/actions/actionCreatorsSearchedList';

export default function SearchArtists() {
  const dispatch = useDispatch();
  const searchedArtistsList = useSelector((store) => store.searchedArtists);
  useEffect(() => {
    getSpotifyToken();
  }, []);

  return (
    <>
      <input
        placeholder="Search your favourite artist"
        onChange={(event) => dispatch(loadSearchedArtists(event.target.value))}
      />
      <button
        type="button"
        onClick={() => dispatch(addFavArtist())}
      >
        Add Favourite Artist

      </button>
      <ul>
        {searchedArtistsList.map((artist) => (
          <li>
            {artist.name}
          </li>
        ))}
      </ul>
    </>
  );
}
