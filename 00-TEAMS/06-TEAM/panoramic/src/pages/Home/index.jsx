import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import loadAxiosSuggestedArtists, { getGenres } from '../../redux/actions/actionCreators';

export default function Home() {
  const artist = useSelector((store) => store.suggestedArtists);

  useEffect(() => {
    loadAxiosSuggestedArtists();
    getGenres().then((response) => console.log(response));
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {artist.map((element) => <li>{`${element}`}</li>)}
      </ul>
    </>
  );
}
