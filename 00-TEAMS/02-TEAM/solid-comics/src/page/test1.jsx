import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadComics from '../redux/actions/comics.creators';

export default function Test01() {
  const comics = useSelector((store) => store.comics);
  const dispatch = useDispatch();
  dispatch(loadComics());

  return (
    <div>
      helloWorld
      <br />
      <div>
        {
        comics.map((comic) => (<p>{comic.title}</p>))
      }
      </div>
    </div>
  );
}
