import React from 'react';
// import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import loadComics from '../redux/actions/comics.creators';

export default function Test01() {
//   const comics = useSelector(loadComics());
  const dispatch = useDispatch();

  dispatch(loadComics());

  // eslint-disable-next-line no-debugger
  //   debugger;
  //   useEffect(() => {
  //     dispatch(loadComics());
  //   }, []);
  return (
    <p>helloWorld</p>
  );
}
