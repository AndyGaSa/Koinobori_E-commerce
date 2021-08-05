import React from 'react';
import './ComicFilter.scss';
import FilterTop from '../filterTop/FilterTop';
import FilterFavourites from '../filterFavourites/FilterFavourites';

// import ComicAside from '../comic-aside/ComicAside';

export default function ComicFilter() {
  return (
    <section className="comic-filter__section">
      <FilterTop />
      <FilterFavourites />
    </section>
  );
}
