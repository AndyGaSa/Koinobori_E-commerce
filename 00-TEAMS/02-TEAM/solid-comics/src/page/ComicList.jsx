import React from 'react';

import Header from '../components/header/Header';
import ComicFilter from '../components/comic-list/ComicFilter';
import ComicNav from '../components/comic-list/ComicNav';
import Footer from '../components/footer/Footer';

export default function ComicList() {
  return (
    <>
      <Header />
      <main>
        <ComicFilter />
        <ComicNav />
      </main>
      <Footer />
    </>
  );
}
