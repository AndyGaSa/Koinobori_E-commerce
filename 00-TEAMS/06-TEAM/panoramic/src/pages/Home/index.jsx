import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { loadArtist } from '../../redux/actions/actionCreators';
import BannerLanding from '../../components/BannerLanding';

export default function Home() {
  const artist = useSelector((store) => store.artist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArtist());
  }, []);

  return (
    <>
      <BannerLanding />
      <h1>Home Page</h1>
      <ul>
        {artist.map((element) => <li>{`${element}`}</li>)}
      </ul>
    </>
  );
}
