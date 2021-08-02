import React from 'react';

import ComicFilter from '../components/comic-list/ComicFilter';
import ComicNav from '../components/comic-list/ComicNav';

export default function ComicList() {
  return (
    <>
      <main>
        <ComicFilter />
        <ComicNav />
      </main>
    </>
  );
}
