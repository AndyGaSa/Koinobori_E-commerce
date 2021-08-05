import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getSpotifyToken from '../../redux/actions/actionCreatorsHome';
import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';
import loadSearchedArtists from '../../redux/actions/actionCreatorsSearchedList';
import './SearchArtist.scss';

export default function SearchArtists() {
  const dispatch = useDispatch();
  const searchedArtistsList = useSelector((store) => store.searchedArtists);

  useEffect(() => {
    getSpotifyToken();
  }, []);

  function getImageFromArtist({ images }) {
    return images && images[0] ? images[0].url : '';
  }

  return (
    <main className="main">
      <h2 className="main__list-title">Search your favourite artist list</h2>
      <input
        data-testid="search-input"
        className="main__input-search"
        placeholder="Search your favourite artist"
        onChange={(event) => dispatch(loadSearchedArtists(event.target.value))}
      />
      <ul className="main__artists-list">
        {searchedArtistsList.map((artist) => (
          <li
            className="main__artist-item artist-item"
            data-testid={`list-item-${artist.name}`}
            key={`list-item-${artist.name}`}
          >

            <img src={getImageFromArtist(artist)} className="artist-item__photo" alt="photoartist" />
            <p className="artist-item__name">{artist.name}</p>
            <button
              className="artist-item__button-add"
              data-testid="add-button"
              type="button"
              onClick={() => dispatch(addFavArtist(artist))}
            >
              + Add
            </button>
          </li>

        ))}
      </ul>
    </main>
  );
}
