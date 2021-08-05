import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import getSpotifyToken, { loadAxiosSuggestedArtists } from '../../redux/actions/actionCreatorsHome';
import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';

import BannerLanding from '../../components/BannerLanding';

export default function Home() {
  const artists = useSelector((store) => store.suggestedArtists);
  const dispatch = useDispatch();

  useEffect(() => {
    getSpotifyToken();
    dispatch(loadAxiosSuggestedArtists());
  }, []);
  return (
    <>
      <BannerLanding />
      <h1>Home Page</h1>
      <ul>
        {
        artists.map((artist) => (
          <li>
            {artist.name}
            <img src={`${artist.images[0].url}`} alt="Girl in a jacket" />
            <p>
              <span>{`Artist genre: ${artist.genres[0]}`}</span>
              <span>{`Followers: ${artist.followers.total}`}</span>
            </p>
            <button
              type="button"
              onClick={() => dispatch(addFavArtist(artist))}
            >
              Add to favourites
            </button>
          </li>
        ))
        }
      </ul>
    </>
  );
}
