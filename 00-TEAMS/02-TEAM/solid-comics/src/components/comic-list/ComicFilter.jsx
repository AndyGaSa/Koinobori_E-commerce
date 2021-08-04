import React from 'react';
import './ComicList.scss';
import FilterTop from '../filterTop/FilterTop';
import FilterFavourites from '../filterFavourites/FilterFavourites';
import ComicAside from '../comic-aside/ComicAside';

export default function ComicFilter() {
  return (
    <section>
      <FilterTop />
      <ComicAside />
      <FilterFavourites />
    </section>
  );
}
