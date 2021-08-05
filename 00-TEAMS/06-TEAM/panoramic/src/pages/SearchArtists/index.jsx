import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getSpotifyToken from '../../redux/actions/actionCreatorsHome';
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
        data-testid="search-input"
        placeholder="Search your favourite artist"
        onChange={(event) => dispatch(loadSearchedArtists(event.target.value))}
      />
      <ul>
        {searchedArtistsList.map((artist) => (
          <li
            data-testid={`list-item-${artist.name}`}
            key={`list-item-${artist.name}`}
          >
            {artist.name}
            <button
              data-testid="add-button"
              type="button"
              onClick={() => dispatch(addFavArtist(artist))}
            >
              + Add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
