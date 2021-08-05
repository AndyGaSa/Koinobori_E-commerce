/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadComics } from '../redux/actions/comics.creators';

import './styles/ComicList.scss';

import ComicNav from '../components/comic-list/ComicNav';
import ComicFilter from '../components/comic-list/ComicFilter';

export default function ComicList() {
  const dispatch = useDispatch();
  const comicStore = useSelector((store) => store.comics);
  useEffect(() => {
    dispatch(loadComics());
  }, []);

  if (comicStore.length > 0) {
    return (
      <section className="section__comic-list">
        <ComicFilter />
        <ComicNav />
      </section>
    );
  }
  return (
    <section className="section__comic-list" />
  );
}
