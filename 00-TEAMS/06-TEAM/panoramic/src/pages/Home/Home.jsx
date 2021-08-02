import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { loadArtist } from '../../redux/actions/actionCreators';

export default function Home() {
  const artist = useSelector((store) => store.artist);
  const dispatch = useDispatch();
  console.log(artist);

  useEffect(() => {
    dispatch(loadArtist());
  }, []);

  return (
    <h1>Home Page</h1>
  );
}
