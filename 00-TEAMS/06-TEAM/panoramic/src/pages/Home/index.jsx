import React from 'react';

import BannerLanding from '../../components/BannerLanding';
import SearchArtists from '../../components/SearchArtists';
import SuggestedArtist from '../../components/SuggestedArtist';

export default function Home() {
  return (
    <>
      <BannerLanding />
      <SuggestedArtist />
      <SearchArtists />
    </>
  );
}
