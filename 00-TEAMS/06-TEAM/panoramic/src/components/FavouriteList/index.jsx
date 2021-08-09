import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteFavArtists } from '../../redux/actions/actionCreatorsFavList';
import './FavouriteList.scss';

export default function FavouritList() {
  const dispatch = useDispatch();
  const favArtist = useSelector((store) => store.favouriteArtists);

  function getImageFromArtist({ images }) {
    return images && images[0] ? images[0].url : '';
  }

  return (
    <section className="section-list">
      <h2 className="section-list__title">Your favourite artists</h2>
      <ul className="artists-list">
        {favArtist.map((artist) => (
          <li
            key={`list-item-${artist.name}`}
            className="artists-list__item"
            data-testid={`list-item-${artist.name}`}
          >
            <img src={getImageFromArtist(artist)} className="artists-list__artist-img" alt="photoartist" />
            <p>{artist.name}</p>
            <button
              className="artists-list__delete-fav-button"
              data-testid={`${artist.name}-delete-button`}
              type="button"
              onClick={() => dispatch(deleteFavArtists(artist))}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
