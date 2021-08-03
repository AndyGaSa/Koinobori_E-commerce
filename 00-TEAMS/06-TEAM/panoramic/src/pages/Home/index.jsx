import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {}

export default function Home() {
  const artist = useSelector((store) => store.suggestedArtists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArtist());
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
